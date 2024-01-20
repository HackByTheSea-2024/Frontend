import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import HomePageP from "./pages/HomeP";
import PatientPage from "./pages/PatientPage";
import SpeechRecog from "./pages/SpeechRecog";
import DoctorPage from "./pages/DoctorPage";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognizer = new SpeechRecognition();
recognizer.continuous = true;
recognizer.interimResults = true;

function App() {
    let content;
    switch (window.location.pathname) {
        case "/":
            content = <HomePageP />;
            break;
        case "/patient":
            content = <PatientPage />;
            break;
        case "/home":
            content = <HomePageP />;
            break;
        case "/doctor":
            content = <DoctorPage />;
            break;
        // Add more cases for other pages
        default:
            content = <div>Page not found</div>;
    }
    return (
        <div className="App">
            <main>{content}</main>
        </div>
    );
}

export default App;
