import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success");
    };

    const handleLowClick = (event) => {
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = (event) => {
        event.preventDefault();
        var textArea = document.getElementById("myBox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showalert("Text copied to clipboard", "success");
    };

    const handleClearClick = (event) => {
        event.preventDefault();
        setText('');
        props.showalert("Text cleared", "success");
    };

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        let newText = text.split(/\s+/).join(" ").trim();
        setText(newText);
        props.showalert("Extra spaces removed", "success");
    };

    return (
        <>
            <div className='container'>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Space</button>
                </form>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((word) => word.length !== 0).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    );
}
