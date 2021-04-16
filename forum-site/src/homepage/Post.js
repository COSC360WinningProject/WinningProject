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
    const { id, likes, username, profilepic, title, description, commentcount, imgsrc } = props;

    console.log(props);

    return (
        <Link to={"/postcontent/" + id}>
        <div className="actualpost">
            <div className="sidebar">
                <ArrowUpwardIcon className="upvote" />
                <span>{likes}</span>
                <ArrowDownwardIcon className="downvote" />
            </div>
            <div className="title">
                <img src={profilepic ? "http://localhost:9000" + profilepic : "http://localhost:9000/images/users/blank-profile.png"} />

                <span className="username">Posted by</span>
                <span className="username underline">{username}</span>
                <div className="spacer"></div>

            </div>
            <div className="body">
                <span className="titletext">{title}</span>

                <img src={imgsrc ? "http://localhost:9000" + imgsrc : ""} />
                <span className="description">{description}</span>
            </div>
            <div className="footer">
                <div className="comments footer-action">
                    <ModeCommentIcon className="comment-icon" />
                    <span>{commentcount} Comments</span>
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
        </Link>
    )
}