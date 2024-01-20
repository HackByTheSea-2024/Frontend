import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomeP";
import SpeechRecog from "./pages/SpeechRecog";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognizer = new SpeechRecognition();
recognizer.continuous = true;
recognizer.interimResults = true;

function App() {
    const [currentPage, setCurrentPage] = useState("speech-recog");

    let content;
    switch (currentPage) {
        case "/":
            content = <HomePage />;
            break;
        case "login":
            content = <Login />;
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
