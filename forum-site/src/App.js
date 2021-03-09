import React, { useState, useEffect } from 'react';
import './App.css';
import { Post } from './Post';
import { testPost } from './testPost';

function App() {
  
  // set state object to store array of posts
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);

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
    <div className="App">
      <div>
        <button className="addPostButton" onClick={addPost}>Add A Post</button>
      </div>

      <div className="posts">
      {posts.map(post => {
        console.log(post);
        return <Post title={post.title} body={post.body} id={post.id} key={post.id} deletePost={deletePost} />
      })}
      </div>
    </div>
  );
}

export default App;
