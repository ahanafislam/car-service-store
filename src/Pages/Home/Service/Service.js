import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <Col>
            <Card className='text-center p-2 border-0 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Price: {price}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button
                        onClick={() => navigateToServiceDetail(_id)}
                        variant="info"
                        className='text-light'
                    >Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;