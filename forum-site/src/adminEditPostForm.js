import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styles/admin.css';



export function AdminEditPostForm(props) {
    const [title, setTitle] = useState(props.title);
    const [category, setCategory] = useState(props.category);
    const [text, setText] = useState(props.text);

    const editPost = (e) => {
        e.preventDefault();

        let formData = {
            'title' : title,
            'category' : category,
            'text' : text,
            'pid' : props.pid
        }
        console.log(formData);

        fetch(`http://localhost:9000/adminEditPost`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
        console.log(e.target.value);
    }
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    const textChangeHandler = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    return (
        <form onSubmit={editPost} id={props.id} style={{display: "none"}}>
            <label for="editTitle">Edit Title: </label>
            <input id="editTitle" type="text" value={title} onChange={titleChangeHandler}/>
            <label for="editCategory">Edit Category: </label>
            <input id="editCategory" type="text" value={category} onChange={categoryChangeHandler}/>
            <label for="editText">Edit Text: </label>
            <input id="editText" type="text" value={text} onChange ={textChangeHandler}/>
            <input type="submit" value="Submit" />
        </form>
    )
}
