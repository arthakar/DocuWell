import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Import CSS for basic styling

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // API Key (replace with your own key)

  // Function to handle sending a new message
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'patient' };
      setMessages([...messages, userMessage]);
      setInput(''); // Clear input after sending
      let systemMessage = 'You are a supportive and empathetic mental health assistant.' +
                          'You provide helpful guidance by inquiring about the causes of their symptoms while'+
                          'prioritizing the emotional well-being and safety of the user.'+
                          'You are not a licensed therapist but can offer general mental health support and guidance.' +
                          'However, before giving any advice, ask at least 3 clarifying questions to the user, one question at a' +
                          'time (i.e. in response to the response the user provides). Each question can build off of one another'+
                          'in a way, or it has to be related to the condition'+
                          'and/or symptom that the user is experiencing. After that, word the advice in a way that is building'+
                          'off of what the questions were asking and how the user describes their symptoms.'

    try {
    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: systemMessage },
            ...messages.map((msg) => ({
            role: msg.sender === 'patient' ? 'user' : 'assistant',
            content: msg.text,
            })),
            { role: 'user', content: `Mental health context: ${input}` },
        ],
        },
        {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
        }
    );



        // Extract the chatbot's response
        const botMessage = {
          text: response.data.choices[0].message.content,
          sender: 'bot',
        };

        // Add the chatbot's response to the conversation
        setMessages((prevMessages) => [...prevMessages, botMessage]);

      } catch (error) {
        console.error('Error calling OpenAI API', error);
        console.error('Error calling OpenAI API', error.response ? error.response.data : error.message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error: Unable to get a response from the chatbot', sender: 'bot' },
        ]);
      }
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (like form submission)
      sendMessage();      // Call sendMessage when Enter is pressed
    }
  };

  return (
    <div className="chatbot-page">
      <div className="container">
        {/* Left column: List of conversations */}
        <div className="conversations-list">
          <h3>Previous Conversations</h3>
          <ul>
            <li>Conversation 1</li>
            <li>Conversation 2</li>
            <li>Conversation 3</li>
          </ul>
          <button className="new-conversation-btn">Start New Conversation</button>
        </div>

        {/* Right column: Chat interface */}
        <div className="chatbox">
          <div className="chatbox-messages">
            {messages.length === 0 && (
              <p>No conversations yet. Start by typing a message below.</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'patient' ? 'sent' : 'received'}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}  
              placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;