import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function Profile(props) {

    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        if (props.user) {
            fetch(`http://localhost:9000/showProfile?username=${props.user}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(resData => {

                    if (!resData[0].profileImageURL && !resData[0].profileImage) {
                        resData[0].profileImageURL = 'http://localhost:9000/images/blank-profile.png';
                    }
                    else {
                        resData[0].profileImageURL = 'http://localhost:9000/' + resData[0].profileImageURL;
                    }

                    setProfileData(resData);
                });
        }

    }, [props.user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('updating profile');
        let newFirstName = e.target.profileFormFirstName.value || profileData[0].firstname;
        let newLastName = e.target.profileFormLastName.value || profileData[0].lastname;
        let newEmail = e.target.profileFormEmail.value || profileData[0].email;
        let newAddress = e.target.profileFormAddress.value || profileData[0].address;
        let newPhone = e.target.profileFormPhone.value || profileData[0].phone;
        let username = e.target.profileFormUsername.value;


        let newData = new FormData();

        newData.append('username', username)
        newData.append('newFirstName', newFirstName);
        newData.append('newLastName', newLastName);
        newData.append('newEmail', newEmail);
        newData.append('newAddress', newAddress);
        newData.append('newPhone', newPhone);



        fetch('http://localhost:9000/updateProfile', {
            method: 'POST',
            body: newData,
        })
    }

    const handleImageSubmit = (e) => {
        e.preventDefault();
        alert('updating profile picture');
        let newPicture = e.target.profileFormPicture.files[0];


        let data = new FormData();
        data.append('file', newPicture, newPicture.name);
        data.append('user', profileData[0].username);

        fetch('http://localhost:9000/updateProfilePicture', {
            method: 'POST',
            body: data
        })
    }

    const loginErr = (<h1>You are not logged in!</h1>);

    if (!profileData[0]) {
        return loginErr;
    }
    else {
        return (
            <Container className="client-profile-container">
                {profileData.map(el => {
                    return (
                        <>
                            <img src={el.profileImageURL} width="200px" height="200px"></img>
                            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Form.Group as={Row} controlId="profileFormUsername">
                                    <Form.Label column sm={2} style={{ color: "black" }}>Username</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control plaintext readOnly value={el.username} style={{ color: "black" }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="profileFormFirstName">
                                    <Form.Label column sm={2} style={{ color: "black" }}>First Name</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder={el.firstname}></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="profileFormLastName">
                                    <Form.Label column sm={2} style={{ color: "black" }}>Last Name</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder={el.lastname}></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="profileFormEmail">
                                    <Form.Label column sm={2} style={{ color: "black" }}>email</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder={el.email}></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="profileFormAddress">
                                    <Form.Label column sm={2} style={{ color: "black" }}>Address</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder={el.address}></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="profileFormPhone">
                                    <Form.Label column sm={2} style={{ color: "black" }}>Phone</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder={el.phone}></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Col sm={6}>
                                        <Form.Control type="submit" value="Update Profile"></Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form>
                            <Form onSubmit={handleImageSubmit} encType="multipart/form-data">
                                <Form.Group as={Row} controlId="profileFormPicture">
                                    <Form.Label column sm={2} style={{ color: "black" }}>Picture</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control required type="file" accept="image/png, image/jpeg" ></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Col sm={6}>
                                        <Form.Control type="submit" value="Update Profile Picture"></Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </>
                    )
                })}
            </Container>
        );
    }
}