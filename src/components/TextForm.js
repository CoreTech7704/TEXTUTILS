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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl font-semibold mb-4">{props.heading}</h1>

      <textarea
        className={`w-full p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200
          ${props.mode === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={text}
        onChange={handleOnChange}
        rows="8"
        placeholder="Enter your text here..."
      ></textarea>

      {/* Button Row */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button onClick={handleUpClick} disabled={text.length === 0} className="btn-style">
          Convert to Uppercase
        </button>
        <button onClick={handleLowClick} disabled={text.length === 0} className="btn-style">
          Convert to Lowercase
        </button>
        <button onClick={handleCopy} disabled={text.length === 0} className="btn-style">
          Copy Text
        </button>
        <button onClick={handleClearClick} disabled={text.length === 0} className="btn-style">
          Clear Text
        </button>
        <button onClick={handleExtraSpaces} disabled={text.length === 0} className="btn-style">
          Remove Extra Spaces
        </button>
      </div>

      {/* Summary and Preview */}
      <div className="mt-6 space-y-2">
        <h2 className="text-xl font-medium">Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.length !== 0).length} words,{' '}
          {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((word) => word.length !== 0).length}{' '}
          Minutes read
        </p>

        <h3 className="text-lg font-medium pt-3">Preview</h3>
        <p className="whitespace-pre-wrap">
          {text.length > 0 ? text : 'Nothing to preview...'}
        </p>
      </div>
    </div>
  );
}
