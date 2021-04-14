import React from "react";

import "./Posts.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
export default function Posts() {
    return (
        <div className="post-wrapper">
            <div className="post">
                <div className="post-sidebar">
                    <ArrowUpwardIcon className="upvote" />
                    <span>21</span>
                    <ArrowDownwardIcon className="downvote" />
                </div>
                <div className="post-title">S</div>
                <div className="post-body">S</div>
                <div className="post-footer">S</div>
            </div>



        </div>
    );
}