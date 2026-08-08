import { useState } from "react";
import { sendTutorMessage } from "../lib/tutorApi";
import { getAuth } from "firebase/auth";

export default function LessonActivity({ language, sessionMode, practiceMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  // Initialize Firebase Auth to get the current user's token directly
  const auth = getAuth();

  async function handleSend() {
    if (!input.trim()) return;

    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("You must be logged in to chat with Vera.");
      return;
    }

    // Retrieve the ID token directly from Firebase
    const token = await currentUser.getIdToken();

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send message to your backend API via your established service
      const response = await sendTutorMessage(token, {
        message: input,
        language,
        sessionMode,
        practiceMode,
      });

      const assistantMessage = {
        role: "assistant",
        content: response.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Lesson Activity Error:", err);
      alert("Tutor failed: " + err.message);
    }

    setInput("");
  }

  return (
    <div className="lesson-container">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "user-msg" : "ai-msg"}>
            {m.content}
          </div>
        ))}
      </div>

      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}