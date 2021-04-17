import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export function AdminEditCommentForm(props) {
    const [text, setText] = useState(props.text);
    

    const editComment = (e) => {
        e.preventDefault();
        console.log(props);
        fetch(`http://localhost:9000/adminEditComment`, {
            method: 'POST',
            body: JSON.stringify({
                cid: props.cid, 
                pid: props.pid , 
                text: text
            }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    const textChangeHandler = (e) => {
        setText(e.target.value);

    }
    return (
        <form onSubmit={editComment}>
            <label for="editText">Edit Text: </label>
            <input id="editText" name="editText" type="text" value={text} onChange={textChangeHandler}/>
            <input type="submit" value="Submit" />
        </form>
    )
}
