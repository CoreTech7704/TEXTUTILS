import React from 'react';

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#1c1c1c' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#ccc'
  };

  return (
    <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1 className="mb-4">About TextUtils</h1>
      <div className="accordion" id="accordionExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils is a powerful and easy-to-use text utility tool.</strong> It allows users to manipulate and analyze their text with a variety of features, including formatting, cleanup, and statistics. Whether you’re writing, editing, or simply organizing your words, TextUtils is here to make the process smoother.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>Convert text to <strong>uppercase</strong> or <strong>lowercase</strong></li>
                <li><strong>Copy</strong> text to your clipboard with one click</li>
                <li><strong>Remove extra spaces</strong> to clean up your content</li>
                <li><strong>Clear</strong> the entire text instantly</li>
                <li>Real-time <strong>word and character count</strong></li>
                <li><strong>Reading time estimate</strong> to help you gauge your content</li>
              </ul>
              All of this in a fast and responsive interface built with React and Bootstrap.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Why Choose TextUtils?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils is crafted for simplicity and speed.</strong> Whether you're a student working on assignments, a professional preparing reports, or just someone who deals with lots of text—TextUtils helps you work faster and smarter. Plus, with light and dark mode support, you can personalize the experience to your environment and preference.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
