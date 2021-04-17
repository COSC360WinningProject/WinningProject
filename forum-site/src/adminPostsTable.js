import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AdminCommentsTable } from './adminCommentsTable';
import { AdminEditPostForm } from './adminEditPostForm'



export function AdminPostsTable(props) {

    const [data, setData] = useState([]);

    /** 
     * TODO: find a way to pass in type and name from 
     * TODO: outer component, currently using hardcoded placeholders
    **/


    // * useEffect will run whenever the components in the dependency array update
    // * dependecy array is the array given as the second argument
    console.log(props.searchType);
    console.log(props.searchStr);
    let url = `http://localhost:9000/adminSearchForPost?searchType=${props.searchType}&searchStr=${props.searchStr}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
        })
            .then(res => res.json())
            .then(resData => setData(resData));
    }, [props.searchStr]);     // * dependecy array is empty so useEffect will only run on page load
    // TODO: update dependency array so that useEffect runs when the select item changes
    // ? might have to change this to be one element for adminUsers and adminUsersTable together



    //  for debugging
    console.log(data);

    const deletePost = (e) => {
        fetch('http://localhost:9000/adminDeletePost', {
            method: 'POST',
            body: JSON.stringify({ pid: e.target.value }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    const showCommentsHandler = (e) => {
        //Make comments table visible
        console.log(e.target.value);
        let postComments = document.getElementById("post" + e.target.value + "comments");
        console.log(postComments);

        postComments.style.display = postComments.style.display == "none" ? "block" : "none";
    }
    const showEditPostHandler = (e) => {
        //Make edit section visible
        console.log(e.target.value);
        let postEdit = document.getElementById("post" + e.target.value + "editSection");
        console.log(postEdit);

        postEdit.style.display = postEdit.style.display == "none" ? "block" : "none";
    }


    return (
        <div className="reports">
            <Table striped bordered className="postsTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Title </th>
                        <th>Likes</th>
                        <th>Upvotes</th>
                        <th>Downvotes</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => {
                        return (
                            <>
                                <tr>
                                    <td>{el.pid}</td>
                                    <td>{el.username}</td>
                                    <td>{el.title}</td>
                                    <td>{el.likes}</td>
                                    <td>{el.upvotes}</td>
                                    <td>{el.downvotes}</td>
                                    <td>{el.category}</td>
                                    <td>
                                        <Button value={el.pid} onClick={showEditPostHandler}>Edit</Button>
                                        <Button  value={el.pid} onClick={deletePost}>Delete</Button>
                                        <Button value={el.pid} onClick={showCommentsHandler}>Comments</Button>
                                    </td>
                                </tr>
                                <tr >
                                    <td colspan="8" >
                                        <AdminEditPostForm id={"post" + el.pid + "editSection"} pid={el.pid} title={el.title} text={el.text} category={el.category} style={{ display: "none" }} className="editPostsForm" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="8">
                                        <AdminCommentsTable id={"post" + el.pid + "comments"} pid={el.pid} className="commentsTable" handleSubmit={props.handleSubmit} caption="caption" />
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