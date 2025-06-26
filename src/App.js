import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-900', 'text-white');
      showAlert('Light Mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        
        {/* Navbar */}
        <Navbar title="Textutils" mode={mode} ToggleMode={toggleMode} />

        {/* Alert (fixed and absolute above content) */}
        <Alert alert={alert} />

        {/* Main content area that flexes to fill height */}
        <div className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter Text to analyze below"
                    showalert={showAlert}
                    mode={mode}
                  />
                }
              />
            </Routes>
          </div>
        </div>

        {/* Footer always at bottom */}
        <Footer mode={mode} />
      </div>
    </Router>
  );
}

export default App;
