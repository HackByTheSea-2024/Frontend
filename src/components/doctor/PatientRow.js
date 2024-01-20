import React, { useState } from "react";
import "../../components/components.css";

function PatientRow(props) {
    return (
        <div style={{ display: "flex" }}>
            <span style={{ width: "312px" }}>{props.name}</span>
            <span style={{ width: "225px" }}>{props.patient_id}</span>
            <span style={{ width: "247px" }}>{props.DOB}</span>
            <span style={{ width: "137px" }}>{props.sex}</span>
            <span style={{ width: "172px" }}>{props.height}</span>
            <span style={{ width: "92px" }}>{props.weight}</span>
        </div>
    );
}

export default PatientRow;
