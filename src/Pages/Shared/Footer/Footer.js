import React from 'react';

const Footer = () => {
    const year = new Date()

    return (
        <footer className='bg-info p-1 d-flex justify-content-center align-item-center'>
            <p className='text-light'>
                <small>The Car Doctor &copy; {year.getFullYear()}</small>
            </p>
        </footer>
    );
};

export default Footer;