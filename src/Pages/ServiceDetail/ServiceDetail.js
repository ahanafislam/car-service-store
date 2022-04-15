import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();

    return (
        <Container>
            <h1>This is Service Detail id : {serviceId}</h1>
            <Link to="/checkout">
                <Button variant="info" className='text-light'>
                    Proceed Checkout
                </Button>
            </Link>
        </Container>
    );
};

export default ServiceDetail;