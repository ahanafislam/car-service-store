import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;

    return (
        <Col>
            <Card className='text-center p-2 border-0 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Price: {price}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="info">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;