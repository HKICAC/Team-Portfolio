import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import Netflix from "../../img/netflix.jpg";
function Experience() {
   return (
    <div className="experience">
      <h1>Experience</h1>
      <div>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6}>
            <h2>Facebook Intern</h2>
            Summer 2021
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <div className="experience-card bg"></div>
            <div className="experience-card">
              <img src={Facebook} className="experience-img"/>
            </div>
            
            
          </Grid>
          <Grid item xs={6}>
            <img src={Apple} className="experience-img"/>
          </Grid>
          <Grid item xs={6}>
          <h2>Apple Intern</h2>
            Summer 2021 
          </Grid>
          <Grid item xs={6}>
          <h2>Netflix Intern</h2>
            Summer 2021
          </Grid>
          <Grid item xs={6}>
            <img src={Netflix} className="experience-img"/>
          </Grid>
        </Grid>
      </div>
      
      
    </div>
  );
}

export default Experience;
