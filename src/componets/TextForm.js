import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = (event) => {
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = (event) => {
        event.preventDefault();
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = (event) => {
    event.preventDefault();
    setText('');
    console.log("Text cleared");
    };

    const handleExtraSpaces = (event) => {
    event.preventDefault();
    let newText = text.split(/\s+/).join(" ");
    setText(newText.trim());
    console.log("Extra spaces removed");
};


    return (
        <>
            <div className='container'>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>        
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Space</button>
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
