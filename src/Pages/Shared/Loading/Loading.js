import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="info" />
        </div>
        </Container>
    );
};

export default Loading;