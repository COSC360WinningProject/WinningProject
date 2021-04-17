import React, { useState, useEffect } from "react";
import "./Posts.css";
import { Post } from "./Post";


export function Posts(props) {

    const [posts, setPosts] = useState([]);


    let url = "http://localhost:9000/posts";
    useEffect(() => {
        fetch(url, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);


    return (
        <div className="posts-container">
            {posts.map(post => {
               return( 
                <Post
                        loggedInUser={props.loggedInUser} 
                        pid={post.pid} 
                        username={post.username}
                        profilepic={post.profileImageURL}
                        title={post.title}
                        description={post.text}
                        commentcount={post.commentcount}
                        likes={post.likes}
                        imgsrc={post.mediaURL}
                    />
               )
            })}


        </div>
    );
}