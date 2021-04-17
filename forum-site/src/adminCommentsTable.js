import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminEditCommentForm } from './adminEditCommentForm';


export function AdminCommentsTable(props) {

    const [data, setData] = useState([]);

    /** 
     * TODO: find a way to pass in type and name from 
     * TODO: outer component, currently using hardcoded placeholders
    **/


    // * useEffect will run whenever the components in the dependency array update
    // * dependecy array is the array given as the second argument
    let url = `http://localhost:9000/adminGetComments?pid=${props.pid}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
        })
            .then(res => res.json())
            .then(resData => setData(resData));
    }, []);     // * dependecy array is empty so useEffect will only run on page load
    // TODO: update dependency array so that useEffect runs when the select item changes
    // ? might have to change this to be one element for adminUsers and adminUsersTable together

    const showEditCommentHandler = (e) => {
        //Make comments table visible
        console.log("commentsTable props");
        console.log(props);
        e.target.style.display = e.target.style.display == "none" ? "inline" : "none";
    }
    const deleteComment = async (e) => {
        console.log('deleteComment Fired');

        await fetch('http://localhost:9000/adminDeleteComment', {
            method: 'POST',
            body: JSON.stringify({ cid: e.target.value, pid: props.pid }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }


    return (
        <div className="reports" id={props.id} style={{display : "none"}}>
            <h2>{props.caption}</h2>
            <Table striped bordered className="commentsTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Commenter</th>
                        <th>Text</th>
                        <th>Likes</th>
                        <th>Upvotes</th>
                        <th>Downvotes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => {
                        return (
                            <>
                                <tr>
                                    <td>{el.cid}</td>
                                    <td>{el.username}</td>
                                    <td>{el.text}</td>
                                    <td>{el.likes}</td>
                                    <td>{el.upvotes}</td>
                                    <td>{el.downvotes}</td>
                                    <td>
                                        <Button onClick={showEditCommentHandler}>Edit</Button>
                                        <Button value={el.cid} onClick={deleteComment}>Delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="1">
                                        <AdminEditCommentForm cid={el.cid} pid={props.pid} text={el.text} style={{ display: "none" }} className="editPostsForm"  />
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
            <br />
        </div>
    )
}