import React, { useState, useEffect } from "react";
import "../../components/components.css";
import PatientRow from "./PatientRow";
import { getDoctorPatientApi, getDoctorNameApi } from "../../Api";

function DoctorPortal() {

    const [firstName, setFirstName] = useState("");
    const [data, setData] = useState([]);
    
    const fetchDoctorData = async () => {
        const res = await getDoctorPatientApi();
        setData(res);
    }
    const fetchDoctorName = async () => {
        const res = await getDoctorNameApi();
        setFirstName(res);
    }
    useEffect(() => {
 
        fetchDoctorData();
        fetchDoctorName();
      
    },[]);

    


   

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            className="alignLeft pl-10 pr-10"
        >
            <p
                style={{
                    width: "514px",
                    height: "105px",
                    flexShrink: "0",
                    color: "#212650",

                    fontFamily: "Poppins",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "90px",
                }}
            >
                {firstName}'s Portal
            </p>
            <div
                style={{
                    borderRadius: "43px",
                    background: "rgba(255, 255, 255, 0.70)",
                    boxShadow: "0px 3px 3px 4px rgba(0, 0, 0, 0.25)",
                    width: "1367px",
                    height: "556px",
                    display: "flex",
                    padding: "43px",
                }}
            >
                <PatientRow
                    name="Tarun Submarine"
                    patient_id="12345678"
                    DOB="01/01/01"
                    sex="Submarine"
                    height="12"
                    weight="12"
                />
            </div>
        </div>
    );
}

export default DoctorPortal;

