import React, { useState } from "react";
import "../../components/components.css";
import axios from "axios";
import { getAiResponseApi } from "../../Api";
import { FaVolumeUp } from "react-icons/fa"; // Importing speaker icon

function AIChat() {
    const [userInput, setUserInput] = useState("");
    const [isSpeakerActive, setIsSpeakerActive] = useState(false); // State to manage speaker icon
    const [conversation, setConversation] = useState([
        {
            sender: "user",
            message:
                "Hi, I’m your personal health analyst. I help you fill out forms to make sure your doctor is up to date on your health.",
        },
    ]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const toggleSpeaker = () => {
        setIsSpeakerActive(!isSpeakerActive); // Toggle the speaker state
    };

    const fetchResponse = async (userMessage) => {
        try {
            const response = await getAiResponseApi(userMessage);
            setConversation((prev) => [
                ...prev,
                { sender: "user", message: response },
            ]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
    };

    const sendMessage = async () => {
        const userMessage = userInput.trim();
        if (userMessage) {
            setConversation((prev) => [
                ...prev,
                { sender: "bot", message: userMessage },
            ]);
            setUserInput("");
            await fetchResponse(userMessage);
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
                                chat.sender === "user"
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
                    onClick={toggleSpeaker}
                    style={{
                        color: isSpeakerActive ? "red" : "blue",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                />
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={(event) =>
                        event.key === "Enter" && sendMessage()
                    }
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default AIChat;
