import React, { useState } from "react";
import NavBar from "../components/nav/NavBar";
import "../components/components.css";
import AIChat from "../components/patient/AIChat";

function ChatPage() {
    return (
        <div className="full-height-container gradient-background">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 40 }}>
                    <NavBar />
                </div>
                <AIChat />
            </div>
        </div>
    );
}

export default ChatPage;
