import React, { useState, useEffect } from "react";
import "../../components/components.css";
import Carousel from "../Carousel";
import "../carousel.css";
import { getPatientForms } from "../../Api";

function PatientForms() {
    getPatientForms();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            className="pl-10 pr-10"
        >
            <p
                style={{
                    height: "85px",
                    flexShrink: "0",
                    color: "#212650",

                    fontFamily: "Poppins",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "90px",
                }}
            >
                Personal Health Analysis Forms
            </p>

            <Carousel
                data={[
                    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                ]}
            />
        </div>
    );
}

export default PatientForms;
