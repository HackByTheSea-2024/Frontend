import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import DoctorPortal from "../components/doctor/DoctorPortal";

export default function DoctorPage() {
    return (
        <div className="full-height-container gradient-background">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 40 }}>
                    <NavBar />
                </div>
                <DoctorPortal />
            </div>
        </div>
    );
}
