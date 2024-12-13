import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DetailScan = ({ name, image, onClose }) => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDesc] = useState("");
  const [recipe, setRecipe] = useState("");

  
  // Fetch description when the component mounts
  useEffect(() => {
    const fetchDescription = async () => {
      setLoading(true);
      const perintah = `Tell me about the plant ${name} in 1 Paragraph`;
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBZqoAxgDkv3jeLd3v_ImSmk6-3fuVmgog",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: perintah }] }], 
            }),
          }
        );

        if (!response.ok) throw new Error("Failed to fetch description");

        const data = await response.json();
        setDesc(
          data.candidates?.[0]?.content?.parts?.[0]?.text || "No description available."
        );
      } catch (error) {
        console.error("Error fetching description:", error);
        setDesc("Failed to fetch description.");
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, [name]);

  // Fetch recipe when the component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const perintah = `Recommend me 5 simple recipes with ${name} as the ingredient. Only the recipe names. split them with "<li>".`;
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBZqoAxgDkv3jeLd3v_ImSmk6-3fuVmgog",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: perintah }] }], 
            }),
          }
        );

        if (!response.ok) throw new Error("Failed to fetch recipe");

        const data = await response.json();
        setRecipe(
          data.candidates?.[0]?.content?.parts?.[0]?.text || "No recipes available."
        );
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setRecipe("Failed to fetch recipe.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [name]);

  // Prompt handling
  const sendPrompt = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);
    const perintah = `You are only permitted to talk about ${name}. If they talk about something else, respond to them in about two sentences saying you are not understand about what are they talking politely. Now, Listen to the following prompt and explain it as usual: ${prompt}`;
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBZqoAxgDkv3jeLd3v_ImSmk6-3fuVmgog",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: perintah }] }], 
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch recipe");

      const data = await response.json();
      setResult(data.candidates?.[0]?.content?.parts?.[0]?.text || "No recipes available.");
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Auto-resizing text areas
  const handleTextareaResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto sm:p-8 flex flex-col items-center" disabled={loading}>
      {/* Back Button */}
      <div className="flex items-center w-full max-w-full mb-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 bg-none text-secondary-500 text-lg"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-screen-xl rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Description and Recipe Sections */}
        <div className="space-y-6">
          {/* Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-textDark text-center lg:text-left">
              {name}
            </h2>
            <div
              className="text-base sm:text-lg text-textDark mb-6 text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Recipe */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-textDark mb-4">Recipes</h3>
            <ul
              className="list-disc pl-6 text-base sm:text-lg text-textDark mb-6 text-justify"
              dangerouslySetInnerHTML={{ __html: recipe }}
            />
          </div>
        </div>
      </div>

      {/* Prompt Form */}
      <div className="w-full max-w-screen-xl p-6 sm:p-8 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-textDark">Have Any Questions?</h3>
        <textarea
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none resize-none"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onInput={handleTextareaResize}
          disabled={loading}
        />
        <div className="flex justify-end">
          <button
            className="w-full sm:w-auto bg-primary-400 text-white px-6 py-2 rounded-lg hover:bg-primary-500 transition disabled:opacity-50"
            onClick={sendPrompt}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        <textarea
          className="w-full p-3 border rounded-lg mt-4 focus:ring-2 focus:ring-primary-500 focus:outline-none resize-none h-40"
          value={result}
          onChange={handleTextareaResize}
        />
      </div>
    </div>
  );
};

export default DetailScan;
