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

    useEffect(() => {
        console.log("before fetch");
        fetch(`http://localhost:9000/singlePost?pid=${pid}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setPostData(data[0]))

    }, []);


    return (
        <div className="posts-container">
            <div className="post">
                <div className="actualpost">
                    <div className="sidebar">
                        <ArrowUpwardIcon className="upvote" />
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
                <Comment />
                <Comment />
            </div>
            <div className="add-comment-container">
                <h2>Leave A Comment</h2>
                <form>
                    <textarea placeholder='Add Your Comment'></textarea>
                    <div className="comment-btn">
                        <input type="submit" value='Comment' />
                        <button id='clear' href='#'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

