import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data using async await
        const getOrders = async() => {
            const email = user.email;
            const url = `https://safe-dawn-33520.herokuapp.com/order?email=${email}`;
            try {
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error) {
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user,navigate]);

    return (
        <Container>
            <h2>Your total order: {orders.length}</h2>
        </Container>
    );
};

export default Order;