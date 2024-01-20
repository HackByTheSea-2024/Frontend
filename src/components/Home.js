import React, { useState } from "react";
import './components.css'; 
import doctorImage from "../images/doctor.png"
import useAuth from "./hooks/useAuth"

export default function Home() {
    const {auth} = useAuth()

    const navigateToPatientPage = () => {
        console.log(auth?._id)
        if(auth?._id != undefined){
            window.location.href = '/patient'; 
        }
        else{
            window.location.href = '/loginpatient'; 
        }
    };

    return(


        <div style={{display:"flex", flexDirection:"row" }} className="alignLeft pl-20">
            <div style={{maxWidth:"60%"}}>
                <p className="title mainFont largeFont">
                Your partner in health and wellness. 
                </p>
                <p className="pt-5 text-left text-base font-normal text-slate-800">
                VitalSync is your center for patient-doctor communication. We offer cutting-edge solutions to seamlessly connect patients and doctors and to streamline our modern triage process.
                </p>

                <div className="pt-10">
                    <button className="mainButton mr-10" onClick={navigateToPatientPage}>I'm a Patient</button>

                    <button className="mainButton">I'm a Doctor</button>
                </div>
                
            </div>
            <div className="bottom-image ">
                    <img src={doctorImage} alt="Image of a Doctor" style={{ width: '90%', height: 'auto' }}/>
            </div>
        </div>
    );
}
