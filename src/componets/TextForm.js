import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event) => {
        // console.log("Uppercase button was clicked" + text);
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; wrong way to change text
    // setText("new tetx"); correct way to chnage state

  return (
    <>
    <div className='Conatainer'>
      <form>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>        
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </form>
    </div>
    <div className="container my-3">
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
