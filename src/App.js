
import React, { useState } from 'react';
import './App.css';
// import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm'

function App() {
  const [mode, setmode] = useState('light'); //dark mode enabled or not

  const ToggleMode = () => {
  if (mode === 'light') {
    setmode('dark');
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'white';
  } else {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

  return (
    <>
      <Navbar title="Textutils" mode={mode} ToggleMode={ToggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter Text to analyze blow"/>
      {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
