import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import PatientForms from "../components/patient/PatientForms";

export default function DoctorPage() {
    return (
        <div className="full-height-container gradient-background">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 40 }}>
                    <NavBar />
                </div>
                <PatientForms />
            </div>
        </div>
    );
}
