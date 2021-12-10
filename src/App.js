import './App.css';
import React from 'react';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
