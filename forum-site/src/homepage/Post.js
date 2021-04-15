import React from 'react';
import './Posts.css';



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
        <div className="actualpost">
            <div className="sidebar">
                <ArrowUpwardIcon className="upvote" />
                <span>51</span>
                <ArrowDownwardIcon className="downvote" />
            </div>
            <div className="title">
                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />

                <span className="username">Posted by</span>
                <span className="username underline">Username</span>
                <div className="spacer"></div>

            </div>
            <div className="body">
                <span className="titletext">title</span>

                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
                <span className="description">Description comes here</span>
            </div>
            <div className="footer">
                <div className="comments footer-action">
                    <ModeCommentIcon className="comment-icon" />
                    <span>51 Comments</span>
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
    )
}