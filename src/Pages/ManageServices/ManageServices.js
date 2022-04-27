import React from 'react';
import { Container } from 'react-bootstrap';
import useService from '../../hooks/useService';

const ManageServices = () => {
    const [services, setServices] = useService();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if(proceed) {
            const url = `https://safe-dawn-33520.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }

    return (
        <Container>
            <div className="w-50 mx-auto">
                <h2>Manage Your Service</h2>
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default ManageServices;