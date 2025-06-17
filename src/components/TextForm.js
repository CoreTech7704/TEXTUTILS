import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = (e) => {
    e.preventDefault();
    setText(text.toUpperCase());
    props.showalert("Converted to Uppercase", "success");
  };

  const handleLowClick = (e) => {
    e.preventDefault();
    setText(text.toLowerCase());
    props.showalert("Converted to Lowercase", "success");
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    setText('');
    props.showalert("Text cleared", "success");
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    props.showalert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = (e) => {
    e.preventDefault();
    setText(text.split(/\s+/).join(" ").trim());
    props.showalert("Extra spaces removed", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">{props.heading}</h1>
      <textarea
        className={`w-full p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200
          ${props.mode === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={text}
        onChange={handleOnChange}
        rows="8"
        placeholder="Enter your text here..."
      ></textarea>

<div className="flex flex-wrap gap-2 my-4">
  <button
    onClick={handleUpClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
    disabled={text.length === 0}
  >
    Convert to Uppercase
  </button>

  <button
    onClick={handleLowClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
    disabled={text.length === 0}
  >
    Convert to Lowercase
  </button>

  <button
    onClick={handleCopy}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
    disabled={text.length === 0}
  >
    Copy Text
  </button>

  <button
    onClick={handleClearClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
    disabled={text.length === 0}
  >
    Clear Text
  </button>

  <button
    onClick={handleExtraSpaces}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
    disabled={text.length === 0}
  >
    Remove Extra Spaces
  </button>
</div>



      <div className="mt-6">
        <h2 className="text-xl font-medium mb-1">Your text summary</h2>
        <p>
          {text.split(/\s+/).filter(word => word.length !== 0).length} words,
          {` `}{text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter(word => word.length !== 0).length} Minutes read</p>

        <h3 className="text-lg font-medium mt-3">Preview</h3>
        <p className="whitespace-pre-wrap">
          {text.length > 0 ? text : "Nothing to preview..."}
        </p>
      </div>
    </div>
  );
}
