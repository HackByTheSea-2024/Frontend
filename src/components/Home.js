import React, { useState } from "react";
import './components.css'; 
import doctorImage from "../images/doctor.png"

export default function Home() {


    return(
        <div className="gradient-background alignLeft pl-20">
            <p className="title mainFont largeFont">
            Your partner in health and wellness.
            </p>
            <p className="pt-10 text-left text-base font-normal text-slate-800">
            VitalSync is your center for patient-doctor communication. We offer cutting-edge solutions to seamlessly connect patients and doctors and to streamline our modern triage process.
            </p>

            <div className="pt-10">
                <button className="mainButton mr-10">I'm a Patient</button>

                <button className="mainButton">I'm a Doctor</button>
            </div>
            <div className="floatRight">
                <img src={doctorImage} alt="Image of a Doctor" />
            </div>
        </div>
    );
}
//className="mediumFont alignLeft"