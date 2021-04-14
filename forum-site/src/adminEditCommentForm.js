import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export function AdminEditCommentForm(props) {
    const [text, setText] = useState("");

    const editComment = (e) => {
        setText(e.target.text);

        fetch(`http://localhost:9000/adminEditComment?text=${props.text}`, {
            method: 'POST',
            body: JSON.stringify({ cid: e.target.id }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    return (
        <form onSubmit={editComment}>
            <label for="editText">Edit Text: </label>
            <input id="editText" type="text" value={props.text} />
            <input type="submit" value="Submit" />
        </form>
    )
}
