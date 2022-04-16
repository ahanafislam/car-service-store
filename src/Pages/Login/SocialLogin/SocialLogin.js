import React, { useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    useEffect(() => {
        if(googleUser || facebookUser) {
            navigate(from, { replace: true });
        }
    },[googleUser,facebookUser, navigate, from]);

    if(googleLoading || facebookLoading){
        return <Loading></Loading>
    }

    if(googleError || facebookError) {
        toast(googleError?.message, facebookError?.message);
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-info w-50 m-1' style={{height:'1px'}}></div>
                <p className='mt-2 pt-2'>Or</p>
                <div className='bg-info w-50 m-1' style={{height:'1px'}}></div>
            </div>
            <div>
                <Button onClick={() => signInWithGoogle()} variant="danger" className='d-block mx-auto my-1 px-4'>Sign In with Google</Button>
                <Button onClick={() => signInWithFacebook()} className='d-block mx-auto my-1 px-4'>Sign In with Facebook</Button>
                <Button variant="dark" className='d-block mx-auto my-1 px-4'>Sign with Github</Button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;