import React from 'react';
import validate from './validate';
import useForm from './useForm';
import './Form.css';
import {
    Link
} from "react-router-dom";

export const FormSignup = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        props.submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <header>
                <h1>
                    Create an account
                </h1>
                </header>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                        tabindex="0"
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label' >Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                        tabindex="0"
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
                        tabindex="0"
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                        tabindex="0"
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'data-message="SignUp"tabindex="0">
                    Sign up
                    </button>
                <span className='form-input-login'>
                    Already have an account? Login <Link to="/login"data-message="Login" tabindex="0">here</Link>
                </span>
            </form>
        </div>
    );
};
