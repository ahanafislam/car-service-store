import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data using async await
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
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