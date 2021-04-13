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
        fetch(`http://localhost:9000/showProfile?username=${props.user}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(resData => setProfileData(resData));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('updating profile');
        let newFirstName = e.target.profileFormFirstName.value || profileData[0].firstname;
        let newLastName = e.target.profileFormLastName.value || profileData[0].lastname;
        let newEmail = e.target.profileFormEmail.value || profileData[0].email;
        let newAddress = e.target.profileFormAddress.value || profileData[0].address;
        let newPhone = e.target.profileFormPhone.value || profileData[0].phone;
        let username = e.target.profileFormUsername.value;

        let newData = {
            'username' : username,
            'newFirstName' :  newFirstName,
            'newLastName': newLastName,
            'newEmail' : newEmail,
            'newAddress' : newAddress,
            'newPhone' : newPhone
        }

        fetch('http://localhost:9000/updateProfile', {
                method: 'POST',
                body: JSON.stringify(newData),
                headers: {
                    'accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
        console.log(profileData);
    }


    return (
        <Container className="client-profile-container">
            {profileData.map(el => {
                return (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="profileFormUsername">
                            <Form.Label column sm={1} style={{color: "black"}}>Username</Form.Label>
                            <Col sm={4}>
                                <Form.Control plaintext readOnly value={el.username} style={{color: "black"}}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="profileFormFirstName">
                            <Form.Label column sm={1} style={{color: "black"}}>First Name</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={el.firstname}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="profileFormLastName">
                            <Form.Label column sm={1} style={{color: "black"}}>Last Name</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={el.lastname}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="profileFormEmail">
                            <Form.Label column sm={1} style={{color: "black"}}>email</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={el.email}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="profileFormAddress">
                            <Form.Label column sm={1} style={{color: "black"}}>Address</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={el.address}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="profileFormPhone">
                            <Form.Label column sm={1} style={{color: "black"}}>Phone</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={el.phone}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={5}>
                                <Form.Control type="submit" value="Update Profile"></Form.Control>
                            </Col>
                        </Form.Group>
                        
                    </Form>
                )})}
        </Container>
    );
}