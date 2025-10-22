import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const VoiceAssistant = ({ addToCart, setSearch, setCategory, dishesRef }) => {
  const [listening, setListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
      setLiveTranscript("");
      setNotFoundMessage(""); // clear previous messages
    };

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setLiveTranscript(transcript);

      if (event.results[event.results.length - 1].isFinal) {
        handleCommand(transcript.toLowerCase());
        setLiveTranscript("");
      }
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  const handleCommand = (speech) => {
    const categoriesList = ["fast food", "chinese", "italian", "pizza", "burger", "south indian"];
    const sections = [
      { phrase: "popular restaurants", action: "popular" },
      { phrase: "trending now", action: "trending" },
      { phrase: "top rated", action: "topRated" },
      { phrase: "best food", action: "bestFood" },
      { phrase: "all restaurants", action: "allRestaurants" },
    ];

    // Reset not found message
    setNotFoundMessage("");

    // Category selection
    const matchedCategory = categoriesList.find((cat) => speech.includes(cat));
    if (matchedCategory) {
      setCategory(capitalizeWords(matchedCategory));
      dishesRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Section navigation
    const matchedSection = sections.find((sec) => speech.includes(sec.phrase));
    if (matchedSection) {
      scrollToSection(matchedSection.action);
      return;
    }

    // Search
    if (speech.includes("search") || speech.includes("show") || speech.includes("find")) {
      const query = speech.replace(/(search|show|find)/, "").trim();
      if (query) {
        setSearch(query);
        return;
      }
    }

    // Add to cart
    if (speech.includes("add")) {
      const dishMatch = speech.match(/add (.+) to cart/);
      if (dishMatch) {
        addToCart(dishMatch[1].trim());
        return;
      }
    }

    // If nothing matched
    setNotFoundMessage("Sorry, I couldn't find anything for that command.");
  };

  const scrollToSection = (section) => {
    switch (section) {
      case "popular":
        document.getElementById("popular-restaurants")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "trending":
        document.getElementById("trending-restaurants")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "topRated":
        document.getElementById("top-rated-restaurants")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "bestFood":
        dishesRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "allRestaurants":
        document.getElementById("all-restaurants")?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const capitalizeWords = (str) => str.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
          listening ? "bg-red-100 animate-ping" : "bg-red-500"
        }`}
      >
        <button
          onClick={startListening}
          className={`w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg ${
            listening ? "bg-red-500 animate-bounce" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          <FaMicrophone className="text-2xl" />
        </button>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-800 bg-white px-2 py-1 rounded-lg shadow-md max-w-xs text-center">
        {listening ? liveTranscript || "Listening..." : "Tap to Speak"}
      </span>
      {notFoundMessage && (
        <span className="mt-1 text-sm font-medium text-red-600 bg-white px-2 py-1 rounded-lg shadow-md max-w-xs text-center">
          {notFoundMessage}
        </span>
      )}
    </div>
  );
};

export default VoiceAssistant;
