import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img} = expert;

    return (
        <Col>
            <Card className='text-center p-2 border-0 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>{description}</Card.Text>
                    <Button variant="info">Book Now</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;