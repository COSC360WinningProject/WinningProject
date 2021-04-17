import React from 'react';
import './CreatePost.css';

export const CreatePost = ({ show, close, onSubmit }) => {
    return (
        <div className="create-post-content"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="create-post-header">
                <caption>
                    <p>Create a post</p>
                    </caption>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            
            <form onSubmit={onSubmit} method="POST" encType="multipart/form">
                <div className="create-post-body">
                    <div className='create-post-inputs'>
                        <label className='create-post-title-label'>Title</label>
                        <input
                            className='create-post-input'
                            type='text'
                            name='title'
                            placeholder='Enter title here'
                            tabindex="0"
                            required
                        />
                    </div>

                    <div className='create-post-inputs'>
                        <label className='create-post-title-label'>Description</label>
                        <input
                            className='create-post-input'
                            type='text-area'
                            name='description'
                            placeholder='Enter description here'
                            tabindex="0"
                            required
                        />
                    </div>

                    <div className='create-post-inputs'>
                        <label className='create-post-title-label'>Image</label>
                        <input
                            className='create-post-input'
                            type='file'
                            name='image'
                            tabindex="0"
                        />
                    </div>


                    <div className='create-post-inputs'>
                        <select name="category" id="category"data-message="Select Post Category">
                            <option value="category 1">Category 1</option>
                            <option value="category 2">Category 2</option>
                        </select>
                    </div>
                </div>
                <div className="create-post-footer"data-message="create post footer">
                    <button type="submit" className="btn-cancel"tabindex="0">Create A Post</button>
                </div>
            </form>
        </div>
    )
};