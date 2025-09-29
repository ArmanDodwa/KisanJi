import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { queryAnswer } from "../assets/queryAnswer";

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en-IN");
  const fileInputRef = useRef(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
    }
  }, [browserSupportsSpeechRecognition]);

  // Update input while recording
  useEffect(() => {
    if (listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  // 📨 Send text message
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    resetTranscript();

    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const matched = queryAnswer.find((q) => lowerInput.includes(q.query));
      const botMessage = {
        type: "bot",
        text: matched
          ? matched.answer
          : "Sorry, I don't understand this query. 🤔",
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // 🎤 Handle mic
  const handleVoiceClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true, language });
    }
  };

  // 🌐 Change language
  const toggleLanguage = (newLang) => {
    setLanguage(newLang);
    resetTranscript();
    if (listening) {
      SpeechRecognition.stopListening();
      SpeechRecognition.startListening({ continuous: true, language: newLang });
    }
  };

  // 📸 Handle image upload
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      console.log("+++++++++++++");
      console.log("IMAGE URL:", url);

      // Add image to messages
      const userImageMessage = { type: "user", image: url };
      setMessages((prev) => [...prev, userImageMessage]);

      // Optionally bot response
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Got your image! 📷 I'm analyzing it...",
          },
        ]);
        setIsTyping(false);
      }, 800);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-br from-purple-500 to-indigo-700">
      <div className="flex flex-col w-full max-w-3xl h-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-600 to-green-800 text-white relative">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-2xl z-10">
            👨‍🌾
          </div>
          <div className="z-10">
            <h1 className="text-xl font-semibold">KisanJi Farmer Support</h1>
            <p className="text-sm opacity-90">
              Your intelligent farming assistant
            </p>
          </div>

          {/* Top-right Language Selector */}
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="ml-auto p-1 rounded bg-white text-green-800 font-semibold cursor-pointer"
          >
            <option value="en-IN">English</option>
            <option value="hi-IN">Hindi</option>
          </select>

          <div className="ml-2 w-3 h-3 rounded-full border-2 border-white bg-green-500 animate-pulse"></div>
        </div>

        {/* Chat Messages Area */}
        <div
          id="chatbox"
          className="flex-1 p-5 overflow-y-auto bg-gradient-to-b from-green-50 to-white flex flex-col gap-3"
        >
          {messages.length === 0 && (
            <div className="text-center py-10 text-gray-600">
              <h3 className="text-green-800 mb-2 text-lg">
                Welcome to KisanJi! 🚜
              </h3>
              <div className="flex justify-center gap-5 mb-4 text-2xl">
                <span>🌾</span>
                <span>🚜</span>
                <span>🌱</span>
                <span>🌽</span>
                <span>🍅</span>
              </div>
              <p className="text-sm leading-relaxed">
                I'm here to help you with crop management, weather insights,
                pest control, soil health, and all your farming questions. How
                can I assist you today?
              </p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                msg.type === "user" ? "flex-row-reverse" : "flex-row"
              } items-start`}
            >
              <div
                className={`flex items-center justify-center w-9 h-9 rounded-full text-xl ${
                  msg.type === "user"
                    ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
                    : "bg-gradient-to-br from-green-400 to-green-500 text-white"
                }`}
              >
                {msg.type === "user" ? "👨‍💻" : "👨‍🌾"}
              </div>

              {/* Show image or text */}
              {msg.image ? (
                <img
                  src={msg.image}
                  alt="Uploaded"
                  className="max-w-[200px] rounded-2xl border border-green-300"
                />
              ) : (
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm break-words ${
                    msg.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-br-sm"
                      : "bg-gradient-to-br from-green-50 to-green-100 text-green-800 border border-green-200 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-400 text-xl">
                👨‍🌾
              </div>
              <div className="flex gap-1 p-3 bg-green-50 border border-green-200 rounded-2xl">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-400"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex flex-col p-5 bg-white border-t border-gray-200">
          <form onSubmit={handleSend} className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about crops, weather, pests, soil, or farming techniques..."
              className="flex-1 px-5 py-3 rounded-full border-2 border-green-200 bg-gray-100 focus:bg-white focus:border-green-500 outline-none text-sm transition"
            />

            {/* Mic Button */}
            <button
              type="button"
              onClick={handleVoiceClick}
              className="w-12 h-12 flex items-center justify-center text-2xl text-green-600 hover:text-green-800 transition"
            >
              {listening ? "🛑" : "🎤"}
            </button>

            {/* 📷 Image Upload */}
            <button
              type="button"
              onClick={handleImageClick}
              className="w-12 h-12 flex items-center justify-center text-2xl text-green-600 hover:text-green-800 transition"
            >
              📷
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
