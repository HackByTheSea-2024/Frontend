import React, { useState } from "react";
import '../components/components.css'; 
import NavBar from "../components/nav/NavBar";
import axios from "axios";
import useAuth from "../components/hooks/useAuth";

export default function PatientLogin() {
    const {setAuth} = useAuth()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSetUsername = event => setUsername(event.target.value);
    const handleSetPassword = event => setPassword(event.target.value);

    function login(){
        const data = { username: String(username), password: String(password)};
        axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/authPatientPassword', data)
            .then (response => {
                let _id = response.data._id
                let email = response.data.email
                setAuth({_id, email, type: "Doctor"})
            window.location.href = "/patient"
            })
            .catch(err => {
                console.log("Error Try Again")
            })
    }
    function newUser(){
        window.location.href = "/patient/SignUp"
    }

    return(

        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            

            <div className="center-container">
                <div className="rectangle">
                    <h1 className="mainFont intermediaryFont form-group">Patient Login</h1>
                    <div className="form-group">
                        <label htmlFor="email" className="mainFont">Username/Email</label>
                        <input type="text" id="email" onChange={handleSetUsername} className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="mainFont">Password</label>
                        <input type="password" id="password" onChange={handleSetPassword} className="input" />
                    </div>
                    <button onClick = {login} className="button mainFont">Continue</button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1}}>
                <button onClick={newUser} style={{width: "10%"}} className="button mainFont">New User?</button>
            </div>


            
        </div>
        </div>


        
    );
}
