import React, { useState } from "react";
import '../components/components.css'; 
import NavBar from "../components/nav/NavBar";


export default function SignUp() {

    const navigateToPatientPage = () => {
        window.location.href = '/patient'; 
    };

    return(

        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            


            <div className="center-container">
                <div className="rectangle">
                    <h1 className="mainFont intermediaryFont form-group">Login</h1>
                    <div className="form-group">
                        <label htmlFor="username" className="mainFont">Username</label>
                        <input type="text" id="username" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="mainFont">Email</label>
                        <input type="text" id="email" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="mainFont">Password</label>
                        <input type="password" id="password" className="input" />
                    </div>
                    <button className="button mainFont">Continue</button>
                </div>
            </div>


            
        </div>
        </div>


        
    );
}
