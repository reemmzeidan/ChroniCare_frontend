import React from "react";
import ChatWindow from "../components/Chat"; // ✅ correct path

function ChatPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <ChatWindow />
    </div>
  );
}

export default ChatPage;
