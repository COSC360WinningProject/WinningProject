import React, { useState, useEffect } from 'react';
import validate from './validate';
import useForm from './useForm';
import './Form.css';
import {
    Link
} from "react-router-dom";

export const ResetPassword = (props) =>{
    const [isUser, setIsUser] = useState();
    const[emai, setEmail] = useState();
    const [message, setMessage] = useState();
    const { handleChange, handleSubmit, values, errors } = useForm(
        props.submitForm,
        validate
    );
    let email = req.body.email;
    let url = `http://localhost:9000/resetPassword?email=${email}`;

    useEffect(() => {
        if(isUser){
            sendResetEmail();
        }
    }, [isUser])

    const checkForEmail = (e) =>{
        e.preventDefault();
        fetch(url, {
            method: "GET",
        })
        .then(res => res.json())
            .then(resData => {
                setIsUser(resData!=null);
                sendResetEmail(resData);
                console.log(resData);
                console.log(isUser);
            });
    }
    const sendResetEmail = (e) =>{
      e.preventDefault();
      if(!isUser){
        setMessage("Email not found");
        alert(message);
        axios
        .post('http://localhost:9000/forgotPassword', {
            email: req.body.email,
        })
        .then(res => {
            console.log(res.data);
            setMessage("Recovery email sent");
        })
    }


    return(
        <div className="form-content-right">
            <h1>Forgot Password</h1>
            <form className="form"onsubmit={checkForEmail}>
                <div className="form-inputs">
                    <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                        />
                </div>
                <button className='form-input-btn' type='submit'>
                    Reset Password
                </button>
                <span className='form-input-login'>
                    Don't have an account?  Register <Link to="/signup">here</Link>
                </span>
                <span className='form-input-login'>
                   Login <Link to="/login">here</Link>
                </span>
            </form>
        </div>
    )
}