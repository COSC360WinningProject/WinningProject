import React from 'react';

import "./Comment.css";

import FavouriteOutlined from "@material-ui/icons/FavoriteOutlined";


import ModeCommentIcon from "@material-ui/icons/ModeComment";


export const Comment = (props) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <p>Dakshin</p>
                <span> 12:11</span>
            </div>

            <div className="comment-body">
                <p>Never seen something this ugly</p>
            </div>
            <div className="comment-footer" >

                <span className="likes"><FavouriteOutlined className="favourite-icon" />21</span>
                <span className="comments"><ModeCommentIcon /> 0 </span>
            </div>

        </div>
    );
}