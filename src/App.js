import './App.css';
import React from 'react';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Project from './components/Project/Project.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
