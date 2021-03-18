import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormLogin from './FormLogin';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/register.svg' alt='register' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormLogin />
                )}
            </div>
        </>
    );
};

export default Form;
