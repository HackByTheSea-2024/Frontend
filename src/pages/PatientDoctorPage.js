import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import PatientDoctorPortal from "../components/doctor/PatientDoctorPortal";

export default function PatientDoctorPage() {
    return (
        <div className="full-height-container gradient-background">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 40 }}>
                    <NavBar />
                </div>
                <PatientDoctorPortal />
            </div>
        </div>
    );
}
