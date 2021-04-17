import React, { useState, useEffect } from 'react';
import './Posts.css';
import { useParams } from "react-router-dom";


import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";


import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "./PostContent.css";
import { Comment } from "./Comment";
export const PostContent = (props) => {

    let { pid } = useParams();

    const [postData , setPostData] = useState({});
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        console.log("before fetch");
        fetch(`http://localhost:9000/singlePost?pid=${pid}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setPostData(data[0]))
        console.log("second fetch");
        fetch(`http://localhost:9000/singlePostComments?pid=${pid}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setCommentsData(data));
        console.log(`PostContent.js:useEffect loggedInUser:`);

    }, []);

    const likeHandler = (e) => {
        console.log("adding like");
        fetch(`http://localhost:9000/like?pid=${pid}`, {
            method: 'GET'
        })
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        console.log(props);
        let user = props.loggedInUser;
        let text = e.target.commentText.value;
        
        let formData = {
            'user' : user,
            'text' : text,
            'pid' : pid
        }
        fetch("http://localhost:9000/createComment", {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(resData => {
            console.log(`PostContent.js:addCommentHandler data:`);
            console.log(resData)
        });
    }


    return (
        <div className="posts-container">
            <div className="post">
                <div className="actualpost">
                    <div className="sidebar">
                        <ArrowUpwardIcon className="upvote" onClick={likeHandler} />
                        <span>{postData.likes}</span>
                        <ArrowDownwardIcon className="downvote" />
                    </div>
                    <div className="title">
                        <img className="profileimage" src={postData.profileImageURL ? "http://localhost:9000" + postData.profileImageURL : "http://localhost:9000/images/users/blank-profile.png"} />

                        <span className="username">Posted by</span>
                        <span className="username underline">{postData.username}</span>
                        <div className="spacer"></div>

                    </div>
                    <div className="body">
                        <span className="titletext">{postData.title}</span>

                        <img src={postData.mediaURL ? "http://localhost:9000" + postData.mediaURL : "http://localhost:9000/images/users/blank-profile.png"} />
                        <span className="description">{postData.text}</span>
                    </div>
                    <div className="footer">
                        <div className="comments footer-action">
                            <ModeCommentIcon className="comment-icon" />
                            <span>{postData.commentcount} Comments</span>
                        </div>
                        <div className="share footer-action">
                            <ShareIcon />
                            <span>Share</span>
                        </div>
                        <div className="save footer-action">
                            <BookmarkIcon />
                            <span>Save</span>
                        </div>

                    </div>
                </div>


            </div>
            <div className="comment-container">
                {commentsData.map(comment => {
                    return (<Comment user={comment.username} text={comment.text} likes={comment.likes}/>);
                })}
            </div>
            <div className="add-comment-container">
                <h2>Leave A Comment</h2>
                <form onSubmit={addCommentHandler} encType="multipart/form-data">
                    <textarea name="commentText" placeholder='Add Your Comment'></textarea>
                    <div className="comment-btn">
                        <input type="submit" value='Comment' />
                        <button id='clear' href='#'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

