import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const fullNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center align-items-center'>
            <div>
                <h2 className='text-info text-center'>Sign Up</h2>
                <Form onSubmit={handleRegister} className='shadow p-5' style={{"width":"28rem"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control ref={fullNameRef} type="text" placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>
                    <Button variant="info" className='text-light' type="submit">
                        Sign Up
                    </Button>
                    <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
                </Form>
            </div>
        </Container>
    );
};

export default Register;