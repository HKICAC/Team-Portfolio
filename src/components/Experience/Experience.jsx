import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import Netflix from "../../img/netflix.jpg";
import Blackrock from "../../img/blackrock.jpg";
import Slider from "./Slider";
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';

//card header should be the same length as the centent
const cardHeader = [
  "Technologies used","Job Description","whatever"
]
const blackrockData = [
  <ul>
    <li>React</li>
    <li>Java</li>
    <li>Springboot</li>
    <li>Solr</li>
  </ul>,
  <ul>
    <li>Designed and implemented an internal-use webapp(ADL Visualizer) and assisted with building a VS Code plugin.</li>
    <li>Replaced the old PHP ADL visualizer with a easy-to-maintain code base and intuitive GUI using React.js</li>
  </ul>,
  "3afgsldghsdkgbdjkgdsnkgnksd"
]

function Experience() {
   return (
    <div className="experience">
      <Typography variant="h3">Experience</Typography>
      <div>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
          <Typography variant="h4">Blackrock</Typography>
            <p>Software Engineering Intern</p>
            <p>Summer 2021</p>
            <Slider className="experience-card" data={blackrockData} header={cardHeader}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Blackrock} className="experience-img"/>
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
            <Slider className="experience-card" data={blackrockData} header={cardHeader}/>
          </Grid>
        </Grid>
        <Divider/>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
            <h3>Netflix</h3>
            <p>Summer 2021</p>
            <Slider className="experience-card" data={blackrockData} header={cardHeader}/>
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
