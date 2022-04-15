import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
        user && navigate(from, { replace: true });
    },[user, navigate, from]);

    if(loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='text-info text-center'>Log In</h2>
                <div className="shadow p-5" style={{"width":"30rem"}}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="info" className='text-light' type="submit">
                            Log in
                        </Button>
                        <p className='mt-2'>New to Genius? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login;