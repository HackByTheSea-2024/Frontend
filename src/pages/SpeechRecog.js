/*import React, { useState } from "react";

export default function SpeechRecog(props) {
    const [isRecording, setRecording] = useState(false);
    const [temp, setTemp] = useState("");
    const [text, setText] = useState("");
    const [currResult, setCurrResult] = useState(0);

    const recognizer = props.listener;

    function toggleRecording() {
        if (!isRecording) {
            recognizer.start();
            console.log("Started recording");
        } else {
            recognizer.stop();
            console.log("Stopped recording");
        }

        setRecording(!isRecording);
    }

    recognizer.onresult = (event) => {
        const results = event.results;

        if (!results) {
            console.log("Got nothin.");
            return;
        }

        if (results[currResult].isFinal) {
            console.log("New Result:", results[currResult]);
            setText(text + results[currResult][0].transcript);
            setTemp("");
            setCurrResult(currResult + 1);
        } else {
            setTemp(results[currResult][0].transcript);
        }
    };

    return (
        <>
            <span>{text}</span>
            <span>{temp}</span>
            <br></br>
            <button
                style={{ background: isRecording ? "red" : "white" }}
                onClick={toggleRecording}
            >
                Microphone button
            </button>
        </>
    );
}*/
