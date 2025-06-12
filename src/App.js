
import React, { useState } from 'react';
import './App.css';
import Alert from './componets/Alert';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm'

function App() {
  const [mode, setmode] = useState('light'); //dark mode enabled or not
  const [alert, setalert] = useState(null); //dark mode enabled or not

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  const ToggleMode = () => {
  if (mode === 'light') {
    setmode('dark');
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'white';
    showalert("Dark Mode has been enabled", "Success");
  } else {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showalert("Light Mode has been enabled", "Success");
  }
}

  return (
    <>
      <Navbar title="Textutils" mode={mode} ToggleMode={ToggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <TextForm heading="Enter Text to analyze blow"/>
      {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
