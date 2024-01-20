import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import PatientForms from "../components/patient/PatientForms";

export default function DoctorPage() {
    return (
        <div
            className="full-height-container gradient-background"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 0 }}>
                    <NavBar />
                </div>
                <PatientForms />
            </div>
            <a
                style={{
                    display: "block",
                    width: "400px",
                    fontWeight: "bold",
                    height: "50px",
                    paddingTop: "13px",
                    marginTop: "25px"
                }}
                className="roundedBar h-full mainFont"
                href="/"
            >
                New Personal Health Analysis
            </a>
        </div>
    );
}
