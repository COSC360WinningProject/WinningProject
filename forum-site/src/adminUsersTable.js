import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export function AdminUsersTable(props) {

    const [data, setData] = useState([]);

    /** 
     * TODO: find a way to pass in type and name from 
     * TODO: outer component, currently using hardcoded placeholders
    **/
    

    // * useEffect will run whenever the components in the dependency array update
    // * dependecy array is the array given as the second argument
    console.log(props.searchType);
    console.log(props.searchStr);
    let url = `http://localhost:9000/adminSearchForUser?searchType=${props.searchType}&searchStr=${props.searchStr}`
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

    const userToggleEnable = (e) => {
        console.log(e.target.id);
        console.log(e.target.value);
        fetch('http://localhost:9000/updateEnabled', {
                method: 'POST',
                body: JSON.stringify({status : e.target.value, uid : e.target.id}),
                headers: {
                    'accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            });
    }


    return (
        <div className="reports">
            <h2>Showing results for </h2>
            <Table striped bordered className="usersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>IsAdmin</th>
                        <th>IsEnabled</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => {
                        return (
                            <tr>
                                <td>{el.uid}</td>
                                <td>{el.username}</td>
                                <td>{el.firstname} {el.lastname}</td>
                                <td>{el.email}</td>
                                <td>{el.address}</td>
                                <td>{el.phone}</td>
                                <td>{el.admin==1?"Yes":"No"}</td>
                                <td>{el.enabled==1?"Enabled":"Disabled"}</td>
                                <td>
                                    <Button id={el.uid} value={el.enabled} onClick={userToggleEnable}>Enable/Disable</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <br />
        </div>
    )
}