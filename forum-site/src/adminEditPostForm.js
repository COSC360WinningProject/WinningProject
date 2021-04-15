import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styles/admin.css';



export function AdminEditPostForm(props) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    const editPost = (e) => {
        setTitle(e.target.editTitle);
        setCategory(e.target.editCategory);
        setText(e.target.text);

        fetch(`http://localhost:9000/adminEditPost?title=${props.title}&category=${props.category}&text=${props.text}`, {
            method: 'POST',
            body: JSON.stringify({ pid: e.target.id }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    return (
        <form onSubmit={editPost}>
            <label for="editTitle">Edit Title: </label>
            <input id="editTitle" type="text" value={props.title} />
            <label for="editCategory">Edit Category: </label>
            <input id="editCategory" type="text" value={props.category} />
            <label for="editText">Edit Text: </label>
            <input id="editText" type="text" value={props.text} />
            <input type="submit" value="Submit" />
        </form>
    )
}
