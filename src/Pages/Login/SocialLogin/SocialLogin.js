import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-info w-50 m-1' style={{height:'1px'}}></div>
                <p className='mt-2 pt-2'>Or</p>
                <div className='bg-info w-50 m-1' style={{height:'1px'}}></div>
            </div>
            <div>
                <Button variant="danger" className='d-block mx-auto my-1 px-4'>Sign with Google</Button>
                <Button className='d-block mx-auto my-1 px-4'>Sign with Facebook</Button>
                <Button variant="dark" className='d-block mx-auto my-1 px-4'>Sign with Github</Button>
            </div>
        </div>
    );
};

export default SocialLogin;