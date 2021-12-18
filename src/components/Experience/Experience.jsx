import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import Netflix from "../../img/netflix.jpg";
import Slider from "./Slider";
import Divider from '@mui/material/Divider';

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';

//card header should be the same length as the centent
const cardHeader = [
  "Technologies used","Job Description","whatever"
]
const facebookData = [
  "React\nsfsf", `2yoggssgsgsgyoy2yoggssgsgsgyoy
      2yoggssgsgsgyoy
      2yoggssgsgsgyoy
      2yoggssgsgsgyoy
      2yoggssgsgsgyoy
      2yoggssgsgsgyoy
      2yoggssgsgsgyoy`,"3afgsldghsdkgbdjkgdsnkgnksd"
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
            <h3>Facebook</h3>
            <p>Summer 2021</p>
            <Slider className="experience-card" data={facebookData} header={cardHeader}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Facebook} className="experience-img"/>
          </Grid>
        </Grid>
        <Divider/>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
            <img src={Apple} className="experience-img"/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <h3>Apple</h3>
            <p>Summer 2021</p>
            <Slider className="experience-card" data={facebookData}/>
          </Grid>
        </Grid>
        <Divider/>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
            <h3>Netflix</h3>
            <p>Summer 2021</p>
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
