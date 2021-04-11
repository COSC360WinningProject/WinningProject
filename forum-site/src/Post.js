import React from 'react';
import Logo from './logo.svg';
import './styles/Post.css';

export const Post = (props) => {

    // assign props
    const { title, body, id, deletePost } = props;
    const handleDeleteClick = () => {
        //if user is admin
        //adminDeletePost(id)
        fetch(`http://localhost9000/adminDeletePost?pid=${id}`, {
            method: "GET",
        })
        .then(res=> res.json())
        deletePost(id);
    }
    function deletePostElement(props){
        const isAdmin = props.admin==1;
        if(isAdmin){
        return <div className="deleteButton">
        <button onClick={handleDeleteClick}>X</button>
    </div>
        }
        else{
            return null;
        }
    }



    return (
        <div className="post">
            {deletePostElement(props)}
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