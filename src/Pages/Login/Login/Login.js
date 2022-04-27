import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    
    // useEffect(() => {
    //     user && navigate(from, { replace: true });
    // },[user, navigate, from]);

    if(loading || sending) {
        return <Loading></Loading>
    }

    if(error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email,password);
        const {data} = await axios.post('https://safe-dawn-33520.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        
        if(email) {
            toast("Please Cheack Your Email.");
        }

        else {
            toast("Please Provide email id");
        }
    }

    return (
        <Container className='min-vh-100 d-flex justify-content-center'>
            <div>
                <h2 className='text-info text-center'>Log In</h2>
                <div className="shadow p-5" style={{"width":"30rem"}}>
                    {errorElement}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="info" className='text-light' type="submit">
                            Log in
                        </Button>
                        <p className='mt-2'>New to Genius? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                        <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
                    </Form>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </Container>
    );
};

export default Login;