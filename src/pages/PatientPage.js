import React, { useState } from "react";
import PatientPortal from "../components/patient/PatientPortal";
import NavBar from "../components/nav/NavBar";


export default function PatientPage() {


    return(
        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            <PatientPortal/>
        </div>
        </div>
    );

}