import React, { useState, useEffect } from 'react';
import validate from './validate';
import useForm from './useForm';
import './Form.css';
import {
    Link,
    Redirect
} from "react-router-dom";

export const ResetPassword = (props) =>{
    const [isUser, setIsUser] = useState(false);
    const[email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    const [serverToken, setServerToken] = useState("");
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [password, setPassword] = useState("");

    

    useEffect(() => {
        if(isUser){
            setPassword();
        }
    }, [isUser])

    const checkForEmail = (e) =>{
        
        e.preventDefault();
        console.log('checkforemail call');
        let url = `http://localhost:9000/checkForEmail?email=${email}`;
        fetch(url, {
            method: "GET",
        })
        .then(res => res.json())
            .then(resData => {
                setIsUser(resData!=null);
                sendResetEmail(resData);
                console.log(resData);
            });
    }
    const sendResetEmail = () =>{
    
        console.log('sendResetEmail call');
        fetch(`http://localhost:9000/emailer?email=${email}`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(resData => {
            if(resData){
                setServerToken(resData.serverToken);
            }
        })
    }
    const tokenChangeHandler = (e) =>{
        setToken(e.target.value);
    }

    const passwordSubmitHandler = async (e) => {
        e.preventDefault();
        console.log('passwordSubmit handler call');
        console.log(`token: ${token}`);
        console.log(`serverToken: ${serverToken}`);

            if(token == serverToken){
                fetch(`http://localhost:9000/resetPassword`,{
                    method: "POST",
                    body: JSON.stringify({newPassword : password, email: email}),
                    headers: {
                        'accept': 'application/json',
                        'Content-Type' : 'application/json'
                    }
                });
                return <Redirect to="/login" />
            }
            else{
                alert("tokens did not match");
            }
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) =>{
        setPassword(e.target.value);
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
                            onChange={emailChangeHandler}
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
            <form className="form" onSubmit={passwordSubmitHandler}>
                <div className="form-inputs">
                    <label className='form-label'>New Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter new password'
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                </div>
                <label className = "form-label">Enter Token</label>
                <input type="text" name="token" onChange ={tokenChangeHandler}/>
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