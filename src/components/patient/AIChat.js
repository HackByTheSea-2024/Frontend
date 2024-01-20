import React, { useState, useEffect } from "react";
import "../../components/components.css";
import axios from "axios";
import { getAiResponseApi } from "../../Api";
import { FaVolumeUp } from "react-icons/fa"; // Importing speaker icon

function AIChat(props) {
    const [userInput, setUserInput] = useState("");
    const [isSpeakerActive, setIsSpeakerActive] = useState(false); // State to manage speaker icon
    const [conversation, setConversation] = useState([
        {
            sender: "AI",
            message:
                "Hello, I am your AI medical assistant. My purpose is to provide your doctor with useful information for your diagnosis. Can you please describe any symptoms you're currently experiencing?",
        },
    ]);
    const [temp, setTemp] = useState("");
    const [text, setText] = useState("");
    const [currResult, setCurrResult] = useState(0);

    const recognizer = props.listener;
    console.log(recognizer);

    function toggleRecording() {
        if (!isSpeakerActive) {
            recognizer.start();
            console.log("Started recording");
        } else {
            recognizer.stop();
            console.log("Stopped recording");
        }

        setIsSpeakerActive(!isSpeakerActive);
    }

    useEffect(() => {
        recognizer.onresult = (event) => {
            const results = event.results;

            if (!results) {
                console.log("Got nothin.");
                return;
            }

            try {
                if (results[currResult].isFinal) {
                    console.log("New Result:", results[currResult]);
                    setText(text + results[currResult][0].transcript);
                    setTemp("");
                    setCurrResult(currResult + 1);
                } else {
                    setTemp(results[currResult][0].transcript);
                }
            } catch (err) {
                console.log(err);
            }
        };
    });

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const fetchResponse = async () => {
        try {
            let strconvo = JSON.parse(JSON.stringify(conversation));
            if (userInput) {
                strconvo = JSON.parse(
                    JSON.stringify(
                        conversation.concat([
                            { sender: "patient", message: userInput.trim() },
                        ])
                    )
                );
            }

            for (let i = 0; i < strconvo.length; i++) {
                strconvo[i] = `${strconvo[i].sender}\\t${strconvo[i].message}`;
            }
            //console.log(strconvo.join("\\n"));

            const response = await getAiResponseApi(strconvo.join("\\n"));
            setConversation((prev) => [
                ...prev,
                { sender: "AI", message: response },
            ]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
    };

    const sendMessage = async () => {
        const userMessage = (userInput + text + temp).trim();
        if (userMessage) {
            setConversation((prev) => [
                ...prev,
                { sender: "patient", message: userMessage },
            ]);
            await fetchResponse();
            setUserInput("");
            setTemp("");
            setText("");
        }
    };

    return (
        <div>
            <div
                style={{
                    width: "80%",
                    overflowY: "auto",
                    maxHeight: "540px",
                }}
                className="ai-chat-container"
            >
                <div className="chat-messages">
                    {conversation.map((chat, index) => (
                        <div
                            key={index}
                            className={`message ${
                                chat.sender === "AI"
                                    ? "userMessage"
                                    : "botMessage"
                            }`}
                        >
                            {chat.message}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ height: "15px" }}></div>
            <div
                className="input-container"
                style={{ width: "80%", alignSelf: "center", margin: "0 auto" }}
            >
                <FaVolumeUp
                    onClick={toggleRecording}
                    style={{
                        color: isSpeakerActive ? "red" : "blue",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                />
                <input
                    type="text"
                    value={userInput + text + temp}
                    onChange={handleInputChange}
                    onKeyPress={(event) =>
                        event.key === "Enter" && sendMessage()
                    }
                    placeholder={"Type your message..."}
                ></input>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default AIChat;
