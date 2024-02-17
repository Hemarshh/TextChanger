import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React, { useState } from 'react';



function App() {


  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#6c757d'
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container"><Main mode={mode} toggleMode={toggleMode} /></div>

    </>
  );

}

export default App;
