import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import AIChat from "../components/patient/AIChat";

function ChatPage(props) {
    return (
        <div className="full-height-container gradient-background">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 40 }}>
                    <NavBar />
                </div>
                <AIChat listener={props.listener} />
            </div>
        </div>
    );
}

export default ChatPage;
