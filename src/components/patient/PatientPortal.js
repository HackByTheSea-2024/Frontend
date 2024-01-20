import React, { useState } from "react";
import "../../components/components.css";

export default function PatientPortal() {
    const [firstName, setFirstName] = useState("Jai");

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} className="alignLeft pl-20 pr-20">
            <div>
                <p className="title mainFont text-5xl font-semibold">
                    {firstName}'s Portal
                </p>

                <div className="roundedBar mt-20">
                    Some text in a rounded rectangular bar
                </div>

                {/* Other content */}
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{flex:1}}className="roundedBar w-full h-4"></div>
                <div style={{flex:1}}className="roundedBar w-full"></div>
            </div>
        </div>
    );
}
