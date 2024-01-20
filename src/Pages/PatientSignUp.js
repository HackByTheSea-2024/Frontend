import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import PatientSignUp from "../components/patientsignup/PatientSignUp";

import "../components/components.css";

export default function PatientLoginPage() {
    return (
        <div className="full-height-container gradient-background">
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: 150 }}>
                        <NavBar />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} className="alignLeft pl-20 pr-20">
                    <p className="title mainFont text-5xl font-semibold">
                        Account Onboarding
                    </p>
                    <PatientSignUp/>
                </div>
            </div>
        </div>
    );
}