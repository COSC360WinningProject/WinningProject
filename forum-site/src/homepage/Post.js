import React from 'react';
import './Posts.css';


import {
    Link
  } from "react-router-dom";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";


import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";

export const Post = (props) => {

    // assign props
    const { pid, likes, username, profilepic, title, description, commentcount, imgsrc } = props;

    const likeHandler = (e) => {
        console.log("adding like");
        fetch(`http://localhost:9000/like?pid=${pid}`, {
            method: 'GET'
        })
    }

    return (
        
        <div className="actualpost">
            <div className="sidebar">
                <ArrowUpwardIcon className="upvote" onClick={likeHandler}/>
                <span>{likes}</span>
                <ArrowDownwardIcon className="downvote" />
            </div>
            
            <div className="title">
                <img src={profilepic ? "http://localhost:9000" + profilepic : "http://localhost:9000/images/users/blank-profile.png"} alt ="Profile pic: "/>

                <span className="username">Posted by</span>
                <span className="username underline">{username}</span>
                <div className="spacer"></div>

            </div>
            <div className="body">
                <Link to={"/PostContent/" + pid}>
                    <span className="titletext">{title}</span>
                </Link>

                <img src={imgsrc ? "http://localhost:9000" + imgsrc : "http://localhost:9000/images/posts/mybutterfly.jpg"} alt={"Title: " + title + " Description: " + description} />
                <span className="description">{description}</span>
            </div>
            
            <div className="footer">
                <div className="comments footer-action">
                    <ModeCommentIcon className="comment-icon" />
                    <span>{commentcount} Comments</span>
                </div>
                <div className="share footer-action">
                    <ShareIcon data-message="Share" tabindex="0"/>
                    <span>Share</span>
                </div>
                <div className="save footer-action">
                    <BookmarkIcon data-message="Bookmark" tabindex="0"/>
                    <span>Save</span>
                </div>

            </div>
        </div>
        
    )
}