import React, { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "../components.css"
import "./patientSignUp.css"
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function PatientSignUp() {
    const {setAuth} = useAuth()
    //first side
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    //second side
    const [DOB, setDOB] = useState('');
    const [sex, setSex] = useState('');
    const [blood, setBlood] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    function handleSetFirstName(event) {
        setFirstName(event.target.value);
    }

    // For personal details
    function handleSetLastName(event) {
        setLastName(event.target.value);
    }

    function handleSetPassword(event) {
        setPassword(event.target.value);
    }

    function handleSetUsername(event) {
        setUsername(event.target.value);
    }

    function handleSetEmail(event) {
        setEmail(event.target.value);
    }

    // For additional information
    function handleSetDOB(event) {
        setDOB(event.target.value);
    }

    function handleSetSex(event) {
        setSex(event.target.value);
    }

    function handleSetBlood(event) {
        setBlood(event.target.value);
    }

    function handleSetHeight(event) {
        setHeight(event.target.value);
    }

    function handleSetWeight(event) {
        setWeight(event.target.value);
    }


    function handleSetBlood(event) {
        setBlood(event.target.value);
    }

    function handleSetHeight(event) {
        setHeight(event.target.value);
    }

    function handleSetWeight(event) {
        setWeight(event.target.value);
    }

    function calculateAge(dob) {
        const [month, day, year] = dob.split('/').map(num => parseInt(num, 10));
        const birthYear = year < 100 ? 2000 + year : year; // Adjust for two-digit year format
        const birthDate = new Date(birthYear, month - 1, day);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function make(){
        let data = {
            email: String(email), 
            username: String(username), 
            password: String(password), 
            lastName: String(lastname), 
            firstName: String(firstname)
        };
        axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/authPatient', data)
          .then (response => {
            data = { email: String(email), username: String(username), password: String(password), age: calculateAge(DOB), lastName: String(lastname), firstName: String(firstname), DOB: DOB, prescriptions: [], pastHistory: null, vitals: null, weight: parseInt(weight), height: parseInt(height), sex: String(sex), doctors: []};
            axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/Patient', data)
              .then (response => {
                login(username, password)
              })
              .catch(err =>{
                console.log("error")
              })
          })
          .catch(err => {
            console.log(err)
            })
      }

      function login(user, pwd){
        const data = { username: String(user), password: String(pwd)};
        axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/authPatientPassword', data)
            .then (response => {
              let _id = response.data._id
              let email = response.data.email
              setAuth({_id, email, type: "Patient"})
            window.location.href = "/patient"
            })
            .catch(err => {
              console.log("Error Try Again")
            })
      }

    return(
        <div style={{ display: "flex", flexDirection: "row", marginTop: "1%", height: "65vh" }}>
            <div style={{ flex: 1, marginRight: '1%' }}> {/* Replace Xpx with your desired margin */}
                <div className="formcontainer"> 
                    <div className="background" style={{ opacity: 0.5, width: '100%', height: '100%', position: 'absolute', borderRadius: '10px' }}></div>
                    <Form className = "leftForm" style={{ position: 'relative'}}>
                        <div style={{display: "flex", flexDirection: "row", marginTop: "1%"}}>
                            <div style={{width: '100%', display: "flex", flexDirection: "column", marginTop: "1%", justifyContent: "space-between", height: "60vh" }}>

                                {/* Row for First Name and Age */}
                                <div className="outerDiv">
                                    <Form.Group className="formGroup1">
                                        <Form.Label className="textlabel textLabel1">First Name</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={firstname} onChange={handleSetFirstName} type="text" />
                                    </Form.Group>

                                    <Form.Group className="formGroup2">
                                        <Form.Label className="textlabel textLabel2">DOB</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={DOB} onChange={handleSetDOB} type="text" placeholder="MM/DD/YY"/>
                                    </Form.Group>
                                </div>

                                {/* Row for Last Name and Sex */}
                                <div className="outerDiv">
                                    <Form.Group className="formGroup1">
                                        <Form.Label className="textlabel textLabel1">Last Name</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={lastname} onChange={handleSetLastName} type="text" />
                                    </Form.Group>

                                    <Form.Group className="formGroup2">
                                        <Form.Label className="textlabel textLabel2">Sex</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={sex} onChange={handleSetSex} type="text" />
                                    </Form.Group>
                                </div>

                                {/* Row for Username and Blood Type */}
                                <div className="outerDiv">
                                    <Form.Group className="formGroup1">
                                        <Form.Label className="textlabel textLabel1">Username</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={username} onChange={handleSetUsername} type="text" />
                                    </Form.Group>

                                    <Form.Group className="formGroup2">
                                        <Form.Label className="textlabel textLabel2" style={{ fontSize: '1em' }}>Blood Type</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={blood} onChange={handleSetBlood} type="text" />
                                    </Form.Group>
                                </div>

                                {/* Row for Email and Height */}
                                <div className="outerDiv">
                                    <Form.Group className="formGroup1">
                                        <Form.Label className="textlabel textLabel1">Email</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={email} onChange={handleSetEmail} type="email" />
                                    </Form.Group>

                                    <Form.Group className="formGroup2">
                                        <Form.Label className="textlabel textLabel2">Height</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={height} onChange={handleSetHeight} type="text" />
                                    </Form.Group>
                                </div>

                                {/* Row for Password and Weight */}
                                <div className="outerDiv">
                                    <Form.Group className="formGroup1">
                                        <Form.Label className="textlabel textLabel1">Password</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="password" />
                                    </Form.Group>

                                    <Form.Group className="formGroup2">
                                        <Form.Label className="textlabel textLabel2">Weight</Form.Label>
                                        <Form.Control className="textentry" autoComplete="off" value={weight} onChange={handleSetWeight} type="text" />
                                    </Form.Group>
                                </div>

                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div style={{ flex: 2.5, marginLeft: '1%'}}> {/* Replace Xpx with your desired margin */}
            <div className="formcontainer"> 
                <div className="background" style={{ opacity: 0.5, width: '100%', height: '100%', position: 'absolute', borderRadius: '10px' }}></div>
                <Form className = "leftForm" style={{ position: 'relative'}}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "1%", height: "65vh"}}>
                        <div style={{flex: 1, display: "flex", flexDirection: "row", marginTop: "1%", height: "10vh"}}>
                            <div classname = "righttitles" style ={{marginLeft: "5%"}}>
                                List any past medical history/conditions
                            </div>
                            <div classname = "righttitles" style ={{marginLeft: "25%"}} >
                                List any current or past prescriptions
                            </div>
                        </div>
                        <div style={{flex: 10, display: "flex", flexDirection: "row", marginTop: "1%", marginRight: "5%"}}>
                            <div className = "rightsmallbackground" style ={{flex: 1.5, display: "flex", flexDirection: "column", marginLeft: "5%", height: "45vh"}}>
                                <div style = {{flex: 8, display: "flex", flexDirection: "column"}}>
                                    <Form.Group className="formGroup1" style = {{flex: 1, width: "100%"}}>
                                        <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            <Form.Control style={{ width: '90%', height: '75%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="formGroup1" style = {{flex: 1, width: "100%"}}>
                                        <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            <Form.Control style={{ width: '90%', height: '75%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="formGroup1" style = {{flex: 1, width: "100%"}}>
                                        <div style = {{display: "flex", flexDirection: "row",margin: "4%", justifyContent: "space-between"}}>
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                            <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            <Form.Control style={{ width: '90%', height: '75%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div style = {{flex: 1}}>
                                <Button className="smallButton" style = {{marginLeft: "4%", marginTop: "2%", height: "60%", width: "30%"}}variant="primary">
                                    Add new condition
                                </Button>
                                </div>
                            </div>
                            <div className = "rightsmallbackground" style ={{flex: 1, display: "flex", flexDirection: "column", marginLeft: "5%", height: "45vh"}} >
                                <Form.Group className="formGroup1" style = {{flex: 1, width: "100%", margin: "1%"}}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '100%', marginLeft: "5%"}}>
                                        <Form.Control style={{ width: '60%', height: '65%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                    <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="formGroup1" style = {{flex: 1, width: "100%"}}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '100%', marginLeft: "5%"}}>
                                        <Form.Control style={{ width: '60%', height: '65%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                    <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="formGroup1" style = {{flex: 1, width: "100%", margin: "1%"}}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '100%', marginLeft: "5%"}}>
                                        <Form.Control style={{ width: '60%', height: '65%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                    <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        <Form.Control style = {{flex: 1}} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="formGroup1" style = {{flex: 1, width: "100%"}}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '100%', marginLeft: "5%"}}>
                                        <Form.Control style={{ width: '60%', height: '65%' }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                    <div style = {{display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between"}}>
                                        <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                        <Form.Control className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                    </div>
                                </Form.Group>
                                <div style = {{flex: .5}}>
                                    <Button className="smallButton" style = {{marginLeft: "4%", marginTop: "2%", height: "60%", width: "50%"}}variant="primary">
                                        Add new prescription
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: 3, display: "flex", flexDirection: "column"}}>
                            <Form.Label style = {{flex: 1, marginLeft: "4%", marginTop: "2%", marginBottom: "1%"}}>List any drug allergies</Form.Label>
                            <div style={{flex: 5, display: "flex", flexDirection: "row", margin: "2.5%"}}>
                                <div classname = "righttitles" style ={{flex: 8, marginRight: "4%"}}>
                                    <Form.Control style={{ width: '100%', height: '100%',  }} className="textentry" autoComplete="off" value={password} onChange={handleSetPassword} type="text" />
                                </div>
                                <Button onClick={make} className="createButton" style = {{flex: 3}} variant="primary">
                                Create Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            </div>
        </div>
    );

}
