
import React from 'react';
import Typical from 'react-typical'
import "./intro.css";
import Me from "../img/icac.png";
function Intro() {
  return (
    <div>
      <Typical
      loop={Infinity}
      steps={[
        "You know what?",
        1000,
        "I am still working on this",
        1000,
        "But I am getting there",
        1000
      ]}
      />
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <h2 className="intro-i">Hi, my name is</h2>
            <h1 className="intro-name">HKICAC</h1>
            <p className='intro-desc'>I am a computer science student</p>
          </div>
          
        </div>
        <div className="intro-right">
          <div className="intro-circle"></div>
          <img className="index-img" src={Me} alt=""/>
        </div>
      </div>
      
    </div>
  );
}

export default Intro;
