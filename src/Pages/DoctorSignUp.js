import React, { useState } from "react";
import '../components/components.css'; 
import NavBar from "../components/nav/NavBar";
import axios from "axios";
import useAuth from "../components/hooks/useAuth";

export default function DoctorSignUp() {
    const {setAuth} = useAuth()
    //first side
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [NPI, setNPI] = useState('');

    const handleSetFirstName = event => setFirstName(event.target.value);
    const handleSetLastName = event => setLastName(event.target.value);
    const handleSetUsername = event => setUsername(event.target.value);
    const handleSetEmail = event => setEmail(event.target.value);
    const handleSetPassword = event => setPassword(event.target.value);
    const handleSetNPI = event => setNPI(event.target.value);




    function make(){
        let data = {
            email: String(email), 
            username: String(username), 
            password: String(password), 
            lastName: String(lastname), 
            firstName: String(firstname)
        };
        axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/authDoctor', data)
          .then (response => {
            data = {
                email: String(email), 
                username: String(username), 
                password: String(password), 
                lastName: String(lastname), 
                firstName: String(firstname),
                NPInumber: String(NPI),
                patients: []
            };
            axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/Doctor', data)
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
    axios.post('https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app/api/authDoctorPassword', data)
        .then (response => {
            let _id = response.data._id
            let email = response.data.email
            setAuth({_id, email, type: "Doctor"})
        window.location.href = "/doctor"
        })
        .catch(err => {
            console.log("Error Try Again")
        })
    }

    return(

        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            


            <div className="center-container">
                <div className="rectangle">
                    <h1 className="mainFont intermediaryFont form-group">Doctor Onboarding</h1>
                  
                    <div className="form-group">
                        <label htmlFor="firstname" className="mainFont">First Name</label>
                        <input type="text" id="firstname" onChange={handleSetFirstName} className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="mainFont">Last Name</label>
                        <input type="text" id="lastname" onChange={handleSetLastName} className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="mainFont">Username</label>
                        <input type="text" id="lastname" onChange={handleSetUsername} className="input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="mainFont">Email</label>
                        <input type="text" id="email" onChange={handleSetEmail} className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="mainFont">Password</label>
                        <input type="password" id="password" onChange={handleSetPassword} className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="npinumber" className="mainFont">NPI Number</label>
                        <input type="text" id="npinumber" onChange={handleSetNPI} className="input" />
                    </div>
                    <button className="button mainFont" onClick={make}>Register</button>
                </div>
            </div>


            
        </div>
        </div>


        
    );
}
