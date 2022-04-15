import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();

    return (
        <Container>
            <h1>This is Service Detail id : {serviceId}</h1>
        </Container>
    );
};

export default ServiceDetail;