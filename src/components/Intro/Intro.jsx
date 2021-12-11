
import React from 'react';
import Typical from 'react-typical'
import "./intro.css";
import Me from "../../img/icac.png";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
function Intro() {
  return (
    <div>
      
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <div className="intro-i">
              <Typical
                loop={1}
                steps={[
                  "",
                  3000,
                  "...",
                  1000,
                  "Hi, my name is",
                  5000,
                ]}
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
