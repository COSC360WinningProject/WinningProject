import React from 'react';
import './CreatePost.css';

export const CreatePost = ({ show, close }) => {
    return (
        <div className="create-post-content"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="create-post-header">
                <p>Create a post</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>

            <div className="create-post-body">


                <div className='create-post-inputs'>
                    <label className='create-post-title-label'>Title</label>
                    <input
                        className='create-post-input'
                        type='text'
                        name='title'
                        placeholder='Enter title here'
                    />
                </div>

                <div className='create-post-inputs'>
                    <label className='create-post-title-label'>Description</label>
                    <input
                        className='create-post-input'
                        type='text'
                        name='description'
                        placeholder='Enter description here'
                    />
                </div>

                <div className='create-post-inputs'>
                    <label className='create-post-title-label'>Image</label>
                    <input
                        className='create-post-input'
                        type='file'
                        name='image'

                    />
                </div>


                <div className='create-post-inputs'>
                    <select name="category" id="category">
                        <option value="category 1">Category 1</option>
                        <option value="category 2">Category 2</option>

                    </select>

                </div>


            </div>
            <div className="create-post-footer">
                <button onClick={close} className="btn-cancel">Create a Post</button>
            </div>

        </div>
    )
};