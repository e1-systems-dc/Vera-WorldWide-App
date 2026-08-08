import { useState } from "react";
import { createTutorRequest, sendTutorMessage } from "./tutorService";

export default function TutorScreen({ language }) {
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const addMessage = (role, content) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage("user", input);

    const payload = createTutorRequest({
      input,
      language,
      sessionMode: "tutor",
      practiceMode: "chat",
      conversationId,
    });

    const response = await sendTutorMessage(payload);

    setConversationId(response.conversationId);
    addMessage("assistant", response.reply);
    setInput("");
  };

  return (
    <div className="tutor-screen">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg msg-${m.role}`}>
            {m.content}
          </div>
        ))}
      </div>
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
