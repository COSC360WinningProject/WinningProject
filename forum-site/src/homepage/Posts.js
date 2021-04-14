import React from "react";

import "./Posts.css";


import { Post } from "./Post";



export default function Posts() {
    return (
        <div className="posts-container">
            <Post />
            <Post />
            <Post />


        </div>
    );
}