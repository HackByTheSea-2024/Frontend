import React, { useState, useEffect } from "react";
import "../../components/components.css";

function AIChat() {
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
                    width: "1000px",
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
                Personal Health Analysis Assistant
            </p>
            <div
                style={{
                    borderRadius: "43px",
                    background: "rgba(255, 255, 255, 0.70)",
                    boxShadow: "0px 3px 3px 4px rgba(0, 0, 0, 0.25)",
                    width: "1367px",
                    height: "396px",
                    display: "flex",
                    padding: "43px",
                }}
            ></div>
        </div>
    );
}

export default AIChat;
