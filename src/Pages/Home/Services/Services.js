import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    },[]);

    return (
        <Container id="services">
            <h1 className="text-info text-center mt-5">Our Services</h1>
            <Row sm={1} md={3} className="g-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        ></Service>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;