import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../common/Button/Button';

import './notFound.scss'

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className='page-404'>
            <div className='main-heading'>
                <h1>404</h1>
            </div>
            <div className='gif-container'></div>
            <div className='content-box'>
                <h3>
                    Looks like you're lost
                </h3>
                <p>The page you are looking for is not available!</p>

                <CustomButton handleClick={handleGoBack} title={'Go Back'} />
            </div>
        </section>
    );
};

export default NotFound;