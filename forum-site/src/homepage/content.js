import React from 'react';
import { useState } from 'react';
import './content.css';
import TrendingToday from './TrendingToday';
import { Posts } from './Posts';
import { CreatePostButton } from './CreatePostButton';
import { CreatePost } from './CreatePost';



export function Content() {
    const [show, setShow] = useState(false);
    const closeHandler = () => setShow(false);



    return <div className="content">

        <TrendingToday />
        <CreatePostButton onClick={() => setShow(true)}>Create a Post</CreatePostButton>
        <CreatePost show={show} close={closeHandler} />
        <Posts />
    </div>
}