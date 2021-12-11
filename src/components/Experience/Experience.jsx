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
        <Grid className="experience-grid" container spacing={3}>
          <Grid item xs={6}>
            Facebook Intern<br/>
            Summer 2021
          </Grid>
          <Grid item xs={6}>
            <img src={Facebook} className="experience-img"/>
          </Grid>
          <Grid item xs={6}>
            <img src={Apple} className="experience-img"/>
          </Grid>
          <Grid item xs={6}>
            Apple Intern<br/>
            Summer 2021 
          </Grid>
          <Grid item xs={6}>
            Netflix Intern<br/>
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
