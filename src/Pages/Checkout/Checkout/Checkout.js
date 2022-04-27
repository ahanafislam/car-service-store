import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const {data} = response;
                if(data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
        })
    }

    return (
        <Container>
            <div className='w-50 mx-auto'>
                <h2>Please Order: {service.name}</h2>
                <Form onSubmit={handlePlaceOrder}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='name' value={user?.displayName} placeholder="Full Name" required readOnly disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" name='email' value={user?.email} placeholder="Enter email" required readOnly disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='service' value={service.name} placeholder="Service Name" required readOnly disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='address' autoComplete='off' placeholder="Address" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" name='phone' placeholder="Phone Number" required/>
                    </Form.Group>
                    <Button variant="info" className='text-light' type="submit">
                        Place Order
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Checkout;