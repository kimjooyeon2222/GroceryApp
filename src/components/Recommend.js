import React, { useState } from "react";
import toast from "react-hot-toast";

function Recommend({ grocery }) {
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    toast.promise(generateRecommendations(), {
      loading: "Fetching recipes...",
      success: "Recipe fetched!",
      error: "Error while fetching recipe"
    })
  }

  // 
  const generateRecommendations = async () => {
    const response = await fetch("https://recipe-api-server-2b17dc4a84db.herokuapp.com/recommend-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ groceries: grocery }),
    })

    // 응답이 에러코드인지
    if (!response.ok) {
      throw new Error("Invalid status code")
    }

    const json_response = await response.json();

    const newMessage = {
      id: messages.length + 1,
      text: json_response.recommendations,
      sender: "bot",
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <h3>Recipe Recommendations</h3>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <button onClick={handleClick} className="sticky-button">
        Generate Recommendations
      </button>
    </div>
  );
}

export default Recommend;
