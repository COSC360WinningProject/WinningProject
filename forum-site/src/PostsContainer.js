import React, { useState, useEffect } from 'react';
import { Post } from './Post';
import { testPost } from './testPost';



export function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const [postCount, setPostCount] = useState(0);
  
    useEffect(() => {
      fetch("http://localhost:9000/posts")
      .then(res => res.json())
      .then(data => {
        setPosts([...data]);
      });
    }, []);
  
  
    const addPost = () => {
      //increment postCount
      setPostCount((prevCount) => prevCount + 1);
      let newPost = new testPost();
      newPost.id = postCount;
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    };
  
    const deletePost = (postIdToDelete) => {
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== postIdToDelete));
    };
    return (
        <div className="post-container">
            <div>
                <button className="addPostButton" onClick={addPost}>Add A Post</button>
            </div>
            <div className="posts">
                {posts.map(post => {
                    return (<Post
                    title={post.title}
                    body={post.body}
                    id={post.id}
                    key={post.id}
                    deletePost={deletePost} />)
                })}
            </div>
        </div>
    );
}