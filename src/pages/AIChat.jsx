

import { useState } from "react";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = {
      text: message,
      sender: "me",
    };

    setMessages((prev) => [...prev, userMessage]);

    const botReply = {
      text: "AI Reply Coming Soon 😎",
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMessage, botReply]);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow">
        <h1 className="text-4xl font-bold mb-6">AI Chat</h1>

        <div className="space-y-4 mb-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl w-fit max-w-[300px] ${
                msg.sender === "me"
                  ? "bg-violet-600 text-white ml-auto"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask AI..."
            className="flex-1 border p-4 rounded-xl"
          />

          <button
            onClick={sendMessage}
            className="bg-violet-600 text-white px-6 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;