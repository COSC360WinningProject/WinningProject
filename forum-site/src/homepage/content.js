import React from 'react';
import { useState } from 'react';
import './content.css';
import TrendingToday from './TrendingToday';
import { Posts } from './Posts';
import { CreatePostButton } from './CreatePostButton';
import { CreatePost } from './CreatePost';



export function Content(props) {
    
    const [show, setShow] = useState(false);
    const showHandler = () => {
        console.log(props.user);
        if(!props.user){
            alert("Must Be Logged In To Create A Post");
        }
        else {
            setShow(true);
        }
    }
    const closeHandler = () => setShow(false);
    const createPostHandler = (e) => {
        e.preventDefault();
        console.log(props.user);
        if(props.user){
            let title =  e.target.title.value;
            let description = e.target.description.value;
            let image = e.target.image.value;
            let category = e.target.category.value;

            let data = new FormData();
            data.append('title', title);
            data.append('description', description);
            data.append('category', category);

            fetch("http://localhost:9000/createPost", {
                method: 'POST',
                body: data
            })
            e.target.title.value = "";
            e.target.description.value = "";
            e.target.image.value = null;
            e.target.category.value = "category 1";
            setShow(false);
        }
        else
        {
            alert("Must be logged in to create a post");
        }
    }



    return <div className="content">

        <TrendingToday />
        <CreatePostButton onClick={showHandler}>Create a Post</CreatePostButton>
        <CreatePost show={show} close={closeHandler} onSubmit={createPostHandler} />
        <Posts />
    </div>
}