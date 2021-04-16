import React from 'react';
import validate from './validate';
import useForm from './useForm';
import './Form.css';
import {
    Link
} from "react-router-dom";


export const FormLogin = (props) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        props.submitForm,
        validate
    );

    const loginVerification = (e) => {

        (async () => {

            let loggedInUser = await handleSubmit(e);

            props.onLogin(loggedInUser.user, loggedInUser.isAdmin);

            if (!loggedInUser) {
                alert('login failed');
            }
            else {
                alert('login successful');
            }

        })();


    }


    return (
        <div className='form-content-right'>
            <form onSubmit={loginVerification} className='form' noValidate>
                <h1>
                    Login
        </h1>

                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button className='form-input-btn' type='submit'>
                    Sign In
        </button>
                <span className='form-input-login'>
                    Don't have an account?  Register <Link to="/signup">here</Link>
                </span>
                <br/>
                <span className='form-input-login'>
                    Forgot your password? Reset your password <Link to="/resetPassword.js">here</Link>
                </span>
            </form>
        </div>
    );
}
