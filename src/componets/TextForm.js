import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; wrong way to change text
    // setText("new tetx"); correct way to chnage state

  return (
    <div>
      <form>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>        
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </form>
    </div>
  )
}
