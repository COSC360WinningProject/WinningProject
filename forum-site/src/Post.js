import React from 'react';
import Logo from './logo.svg';
import './styles/Post.css';

export const Post = (props) => {

    // assign props
    const { title, body, id, deletePost } = props;


    return (
        <div className="post">
            <div className="postImage">
                <img src={Logo} className="App-logo" alt="react logo" />
            </div>
            <div className="postText">
                <h1 className="post-title">{title}</h1>
                <p>
                    {body}
                </p>
                <p>
                    {id}
                </p>
            </div>
        </div>
    )
}