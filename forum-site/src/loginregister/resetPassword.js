import React, { useState, useEffect } from 'react';
import validate from './validate';
import useForm from './useForm';
import './Form.css';
import {
    Link,
    Redirect
} from "react-router-dom";

export const ResetPassword = (props) =>{
    const [isUser, setIsUser] = useState();
    const[email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    const [serverToken, setServerToken] = useState("");
    const { handleChange, handleSubmit, values, errors } = useForm(
        props.submitForm,
        validate
    );
    let url = `http://localhost:9000/checkForEmail?email=${email}`;

    useEffect(() => {
        if(isUser){
            sendResetEmail();
        }
    }, [isUser])

    const checkForEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.email.value);
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
      fetch("http://localhost:9000/emailer", {
          method: "POST",
          body: JSON.stringify({'email' : email}),
          headers: {
            'accept': 'application/json',
            'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(resData => {
            setServerToken(resData);
        })
    }
    const tokenChangeHandler = (e) =>{
        setToken(e.target.value);
    }

    const setPassword = (e) =>{
        e.preventDefault();
        
        fetch(`http://localhost9000/resetPassword`,{
            method: "POST",
            body: JSON.stringify({newPassword : e.target.password}, {email: email}),
            headers: {
                'accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        return <Redirect to="/login" />
    }

if(!isUser){
    return(
        <div className="form-content-right">
            <form className="form" onSubmit={checkForEmail}>
            <h1>Forgot Password</h1>
                <div className="form-inputs">
                    <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                </div>
                <button className='form-input-btn' type='submit'>
                    Send Confirmation Email
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
    else{
        return(
            <div className="form-content-right">
            <h1>Reset Password</h1>
            <form className="form"onsubmit={setPassword}>
                <div className="form-inputs">
                    <label className='form-label'>New Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter new password'
                            value={values.password}
                            onChange={handleChange}
                        />
                </div>
                <input type="text" onchange ="tokenChangeHandler"/>
                <button className='form-input-btn' type='submit'>
                    Reset Password
                </button>
                <span className='form-input-login'>
                    Don't have an account?  Register <Link to="/signup">here</Link>
                </span>
            </form>
        </div>
        )
    }
}