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



function Project() {
    const { height, width } = useWindowDimensions();
    return (
        <div className="project">
        <h1>Project</h1>
            <Grid className="experience-grid" container spacing={3}>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix}></img>
                    project 1
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix}></img>
                    project 2
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix}></img>
                    project 3
                </div>
                </Grid>
            </Grid>
        
        
        </div>
  );
}

export default Project;
