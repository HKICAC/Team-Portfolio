import React from 'react';
import "./project.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Netflix from "../../img/netflix.jpg";
import useWindowDimensions from '../Window/Window';
import {useMediaQuery} from '@material-ui/core';


function Project() {
    const { height, width } = useWindowDimensions();
    // Media Queries 

    return (
        <div className="project">
        <h1>Project</h1>
            <Grid className="experience-grid" container spacing={3}>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix} alt='Netflix Logo'></img>
                    <Typography variant="h2">Project 1</Typography>
                    <Typography className='project-box-body'>Project 1 is a very interesting project. It utilizes the NERP stack is very useful.</Typography>
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix} alt='Netflix Logo'></img>
                    <Typography variant="h2">Project 2</Typography>
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix} alt='Netflix Logo'></img>
                    <Typography variant="h2">Project 3</Typography>
                </div>
                </Grid>
            </Grid>
        
        
        </div>
  );
}

export default Project;
