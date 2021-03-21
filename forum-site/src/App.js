import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './loginregister/Form';
import { Post } from './Post';
import { testPost } from './testPost';


function App() {

  // set state object to store array of posts
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [APIResponse, setAPIResponse] = useState("No Response");

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(data => {
        setAPIResponse(data.message);
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
    <div className="App">
      <div>
        <Form />
      </div>
      <div>
        <button className="addPostButton" onClick={addPost}>Add A Post</button>
      </div>
      <div className="api-container">
        <p>{APIResponse}</p>
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

export default App;
