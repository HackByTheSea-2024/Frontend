import React, { useState } from "react";
import '../components/components.css'; 
import NavBar from "../components/nav/NavBar";


export default function DoctorLogin() {

    const navigateToPatientPage = () => {
        window.location.href = '/patient'; 
    };

    return(

        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            


            <div className="center-container">
                <div className="rectangle">
                    <h1 className="mainFont intermediaryFont form-group">Doctor Onboarding</h1>

                  
                    <div className="form-group">
                        <label htmlFor="firstname" className="mainFont">First Name</label>
                        <input type="text" id="firstname" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="mainFont">Last Name</label>
                        <input type="text" id="lastname" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="mainFont">Username</label>
                        <input type="text" id="lastname" className="input" />
                    </div>



                    <div className="form-group">
                        <label htmlFor="email" className="mainFont">Email</label>
                        <input type="text" id="email" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="mainFont">Password</label>
                        <input type="password" id="password" className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="npinumber" className="mainFont">NPI Number</label>
                        <input type="text" id="npinumber" className="input" />
                    </div>
                    <button className="button mainFont">Register</button>
                </div>
            </div>


            
        </div>
        </div>


        
    );
}
