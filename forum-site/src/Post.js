import React from 'react';
import Logo from './logo.svg';
import './Post.css';

export const Post = (props) => {

    // assign props
    const { title, body, id, deletePost } = props;
    const handleDeleteClick = () => {
        deletePost(id);
    }



    return (
        <div className="post">
            <div className="deleteButton">
                <button onClick={handleDeleteClick}>X</button>
            </div>
            <div className="postImage">
                <img src={Logo} className="App-logo" alt="react logo"/>
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