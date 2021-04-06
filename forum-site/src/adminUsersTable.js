import React, { useState } from 'react';


export function AdminUsersTable(props) {

    const [data, setData] = useState({});

    var location = `http://localhost:9000/adminSearchForUser?searchType=Name&searchStr=joe`;
    fetch(location, {
            method: "GET",
        })
        .then(res => res.json())
        .then(resData => setData(resData));

    console.log(Object.keys(data));

    return (
        <div className="reports">
            <table className="usersTable">
                <caption>Caption</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username </th>
                        <th>Number of Posts </th>
                        <th>Birthdate </th>
                        <th>City </th>
                        <th>State </th>
                        <th>Country </th>
                        <th>Status </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12</td>
                        <td>JohnDoe</td>
                        <td>password</td>
                        <td>email@email.com</td>
                        <td>1234 567 st</td>
                        <td>123-456-7890</td>
                        <td id="12" className="enabledStatus" key = "enabled" >Key</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
    )
}