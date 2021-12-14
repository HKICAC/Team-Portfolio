
import React from 'react';
import "./intro.css";
import Me from "../../img/icac.png";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';


function Intro() {
  return (
    <div>
      
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <div className="intro-i">
              <ReactTypingEffect
                text={["Hi, my name is"]}
                eraseDelay= {50000000}
                typingDelay= {1750}
              />
            </div>
            <h1 className="intro-name">HKICAC</h1>
            <div className="social-media">
              <a href="https://github.com/orgs/HKICAC/dashboard" target="_blank" rel="noreferrer">
                <FaGithubSquare className="social-button"/>
              </a>
              <a href="https://www.linkedin.com/in/edwinkam/" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-button"/>
              </a>
            
            </div>
            
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
