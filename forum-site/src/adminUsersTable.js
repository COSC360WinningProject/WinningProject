import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


export function AdminUsersTable(props) {

    const [data, setData] = useState([]);

    /** 
     * TODO: find a way to pass in type and name from 
     * TODO: outer component, currently using hardcoded placeholders
    **/
    const [searchType, setSearchType] = useState('name');
    const [searchName, setSearchName] = useState('joe');
    

    // * useEffect will run whenever the components in the dependency array update
    // * dependecy array is the array given as the second argument
    useEffect(() => {
        fetch(`http://localhost:9000/adminSearchForUser?searchType=Name&searchStr=joe`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(resData => setData(resData));
    }, []);     // * dependecy array is empty so useEffect will only run on page load
    // TODO: update dependency array so that useEffect runs when the select item changes
    // ? might have to change this to be one element for adminUsers and adminUsersTable together
    


    //  for debugging
    console.log(data);

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
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.address}</td>
                                <td>{el.phone}</td>
                                <td>{el.admin}</td>
                                <td>{el.enabled}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <br />
        </div>
    )
}