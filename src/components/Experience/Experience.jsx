import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import Netflix from "../../img/netflix.jpg";
import Slider from "./Slider";

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';

const facebookData = [
  "1haha", "2yoyoy", "3afgsldghsdkgbdjkgdsnkgnksd"
]

function Experience() {
   return (
    <div className="experience">
      <ReactTypingEffect
            text={["Experience"]}
            eraseDelay= {50000000}
            typingDelay= {2500}
            className= 'project-title'
      />
      <div>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
            <Slider className="experience-card" data={facebookData}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Facebook} className="experience-img"/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Apple} className="experience-img"/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
          <Slider className="experience-card" data={facebookData}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
          <Slider className="experience-card" data={facebookData}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Netflix} className="experience-img"/>
          </Grid>
        </Grid>
      </div>
      
      
    </div>
  );
}

export default Experience;
