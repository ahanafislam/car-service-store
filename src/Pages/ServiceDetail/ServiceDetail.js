import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <Container>
            <h1>You are about to book : {service.name}</h1>
            <Link to={`/checkout/${serviceId}`}>
                <Button variant="info" className='text-light'>
                    Proceed Checkout
                </Button>
            </Link>
        </Container>
    );
};

export default ServiceDetail;