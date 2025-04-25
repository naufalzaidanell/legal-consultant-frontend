import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Legal AI Consultant</h1>
      <div className="mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a legal question..."
          className="border p-2 w-full"
        />
        <button
          onClick={handleChat}
          className="bg-blue-500 text-white p-2 mt-2"
        >
          Ask AI
        </button>
      </div>
      {response && <p className="mt-4">AI Response: {response}</p>}
    </div>
  );
}

export default App;
