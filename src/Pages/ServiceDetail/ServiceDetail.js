import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    },[]);

    return (
        <Container>
            <h1>You are about to book : {service.name}</h1>
            <Link to="/checkout">
                <Button variant="info" className='text-light'>
                    Proceed Checkout
                </Button>
            </Link>
        </Container>
    );
};

export default ServiceDetail;