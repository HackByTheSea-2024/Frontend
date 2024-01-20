import React, { useState, useEffect } from "react";
import "../../components/components.css";
import PatientRow from "./PatientRow";
import { getDoctorPatientApi, getDoctorNameApi } from "../../Api";
import {Table} from "antd";

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

    const columns = [
        {
          title: "Patient Name",
          dataIndex: "firstName",
          key: "name",
          responsive: ["sm", "md", "lg", "xl"],
          render: (name) => <h4 className="text-[15px]">{name}</h4>,
        },
        {
            title: "Date of Birth",
            dataIndex: "DOB",
            key: "dob",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },
          {
            title: "Sex",
            dataIndex: "sex",
            key: "sex",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },
          {
            title: "Height",
            dataIndex: "height",
            key: "height",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },
    ]
    

    const handleRowClick = (record) => {
       window.location.href = '/patientDoctorPortal'; 
    };
    
       
    

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
                    height: "auto", // Changed to 'auto' to accommodate variable content length
                    display: "flex",
                    flexDirection: "column", // Added for vertical layout
                    padding: "43px",
                    overflow: "auto" // Added in case content exceeds container height
                }}
            >
            {data && (
                    <Table
                    
                    columns={columns}
                    dataSource={data}
                    onRow={(record) => ({
                        onClick: () => handleRowClick(record), // Handle row click
                      })}
            
                    
                    />
                )}
             
            </div>
        </div>
    );
}

export default DoctorPortal;

