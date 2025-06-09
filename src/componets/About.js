import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    });

    const [btnText, setBtnText] = useState("Enable Light Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            });
            setBtnText("Enable Light Mode");
        }
    };

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item’s accordion body.</strong> Some placeholder content here.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item’s accordion body.</strong> More placeholder content.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item’s accordion body.</strong> Final placeholder content.
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">
                    {btnText}
                </button>
            </div>
        </div>
    );
}
