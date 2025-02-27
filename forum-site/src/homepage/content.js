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
        console.log(`Content.js:showHandler Logged In User: ${props.loggedInUser}`);
        if(!props.loggedInUser){
            alert("Must Be Logged In To Create A Post");
        }
        else {
            setShow(true);
        }
    }
    const closeHandler = () => setShow(false);
    const createPostHandler = (e) => {
        e.preventDefault();
        console.log(`Content.js:createPostHandler LoggedInUser: ${props.loggedInUser}`);
        if(props.loggedInUser){
            let title =  e.target.title.value;
            let description = e.target.description.value;
            let image = e.target.image.files[0];
            let category = e.target.category.value;

            let data = new FormData();
            data.append('file', image, image.name);
            data.append('title', title);
            data.append('description', description);
            data.append('category', category);
            data.append('username', props.loggedInUser);

            fetch("http://localhost:9000/createPost", {
                method: 'POST',
                body: data
            })
            .then(res => res.json())
            .then(data => console.log(data));

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
        <Posts loggedInUser={props.loggedInUser}/>
    </div>
}