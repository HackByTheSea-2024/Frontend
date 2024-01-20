import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import HomePageP from "./pages/HomeP";
import PatientPage from "./pages/PatientPage";
import SpeechRecog from "./pages/SpeechRecog";
import DoctorSignUp from "./pages/DoctorSignUp";
import DoctorLogin from "./pages/DoctorLogin";
import PatientLogin from "./pages/PatientLogin";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import DoctorPage from "./pages/DoctorPage";
import ChatPage from "./pages/ChatPage";
import FormsPage from "./pages/FormsPage";
import Home from "./components/Home";

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
        case "/patient/forms":
            content = <FormsPage />;
            break;
        case "/patient/SignUp":
            content = <PatientSignUpPage />;
            break;
        case "/chat":
            content = <ChatPage listener={recognizer} />;
            break;
        case "/doctor/SignUp":
            content = <DoctorSignUp />;
            break;
        case "/doctor/login":
            content = <DoctorLogin />;
            break;
        case "/patient/login":
            content = <PatientLogin />;
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
