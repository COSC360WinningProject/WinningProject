import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';


export function Profile() {

    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/showProfile?username=ashitaNoJoe`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(resData => setProfileData(resData));
    }, []);


    return (
        <div className="client-profile-container">
            <Table striped bordered className="profileInfoTable">
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {profileData.map((el) => {
                        return (
                            <tr>
                                <td>{el.username}</td>
                                <td>{el.firstname}</td>
                                <td>{el.lastname}</td>
                                <td>{el.email}</td>
                                <td>{el.address}</td>
                                <td>{el.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}