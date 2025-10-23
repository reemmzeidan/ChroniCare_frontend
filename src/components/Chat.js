import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatFile, setChatFile] = useState(null);
  const chatContainerRef = useRef(null);

  // Mock "fetching" messages on mount
  useEffect(() => {
    const fakeMessages = [
      { _id: 1, text: "Hey there! 👋", sender: "John", createdAt: new Date() },
      { _id: 2, text: "Hi John! How are you?", sender: "Me", createdAt: new Date() },
    ];
    setMessages(fakeMessages);
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() && !chatFile) return;

    const newMsg = {
      _id: Date.now(),
      text: newMessage || "📎 " + chatFile.name,
      sender: "Me",
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
    setChatFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setChatFile(file);
  };

  return (
    <div className="chat-window">
      {/* Messages */}
      <div className="chat-messages" ref={chatContainerRef}>
        {messages.length === 0 ? (
          <p className="no-messages">No messages yet. Start the conversation 💬</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`message ${msg.sender === "Me" ? "sent" : "received"}`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="chat-input">
        {chatFile && <div className="attached-file">📎 {chatFile.name}</div>}

        <div className="input-row">
          <textarea
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input
            type="file"
            onChange={handleFileChange}
            id="chatFileInput"
            style={{ display: "none" }}
          />
          <label htmlFor="chatFileInput" className="attach-icon">
            📎
          </label>
          <button onClick={handleSendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

