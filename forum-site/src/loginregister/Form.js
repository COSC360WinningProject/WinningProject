import React, { useState } from 'react';
import './Form.css';
import { FormSignup } from './FormSignup';
import { FormLogin } from './FormLogin';

export function Form(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    console.log(Object.keys(props));
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>

                <div className='form-content-left'>
                    <img className='form-img' src='img/register.svg' alt='register' />
                </div>
                {props.isSignup === "true" ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormLogin onLogin={props.onLogin} submitForm={submitForm}/>
                )}
            </div>
        </>
    );
};

