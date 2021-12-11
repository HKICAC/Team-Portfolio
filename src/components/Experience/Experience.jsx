import React from 'react';
import "./experience.css";
import Me from "../../img/apple.png";

function Experience() {
  return (
    <div>
      
      <div className="experience">
        <div className="header">
        <h1>Experience</h1>
        </div>
        
        <div className="experience-left">
            <div className="experience-job">
                <h2>Apple Software Engineering Intern</h2>
                <p>2020-2021</p>
            </div>
            
            
        </div>
          
        <div className="experience-right">
            <div className="experience-job">
                <img className="experience-img" src={Me} alt=""/>
            </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Experience;
