import { useState } from "react";
import axios from "axios";
import { Loader } from 'lucide-react';

import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextTranslation = async () => {
    setLoading(true)
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key":
            "10a3003a8emshd5dee9c24db841dp17bb22jsn7c8ed7ff78b4",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: `${textInput}`,
          source: "en",
          target: `${selectValue}`,
          format: "text",
        },
      };
      const response = await axios.request(options);
      setLoading(false);
      setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText);
    } catch (error) { 
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="app-root">
      <div className="card">
        <h1 className="title">Text Translator</h1>

        <div className="textareas">
          <textarea
            name="input-text"
            className="input-text"
            placeholder="Enter text in English..."
            onChange={(e) => setTextInput(e.target.value)}
            value={textInput}
          ></textarea>
          <textarea
            name="output-text"
            className="output-text"
            placeholder="Translation will appear here"
            value={result}
            readOnly
          ></textarea>
        </div>

        <div className="controls">
          <label htmlFor="options" className="label">Converted Into:</label>
          <select
            name="value"
            className="select"
            onChange={(e) => setSelectValue(e.target.value)}
            value={selectValue}
          >
            <option value="">Select</option>
            <option value="sa">Sanskrit</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="ks">Kashmiri</option>
            <option value="mr">Marathi</option>
            <option value="pa">Punjabi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="ur">Urdu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="or">Oriya</option>
            <option value="as">Assamese</option>
            <option value="ne">Nepali</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        <button className="btn translate-btn" onClick={handleTextTranslation}>
          {loading ? (<Loader className="loader"/>) : "Translate"}
        </button>
      </div>
    </div>
  );
}

export default App;
