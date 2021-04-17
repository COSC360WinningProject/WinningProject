import React, { useState } from 'react';
import './Form.css';
import { FormSignup } from './FormSignup';
import { FormLogin } from './FormLogin';
import { ResetPassword } from './resetPassword';

export function Form(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);


    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>

                <div className='form-content-left'>
                    <img className='form-img' src='img/register.svg' alt="registration image"/>
                </div>
                {props.isSignup === "true" ? (
                    <FormSignup submitForm={submitForm} data-message="signup"/>
                ) : (
                    props.isResetPassword=== "true" ? (
                        <ResetPassword submitForm = {submitForm} data-message="reset password"/>
                    ) : (
                        <FormLogin onLogin={props.onLogin} submitForm={submitForm} data-message="login"/>
                    )
                    
                )}
            </div>
        </>
    );
};

