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
import Discordbot from "../../img/discordbot.png";
import useWindowDimensions from '../Window/Window';

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';

// Github Buttons
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";


function Project() {
    const { height, width } = useWindowDimensions();

    return (
        <div className="project">
        <ReactTypingEffect
            text={["Project List"]}
            eraseDelay= {50000000}
            typingDelay= {2500}
            className= 'project-title'
        />
            <Grid className="experience-grid" container spacing={3}>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Discordbot} alt='Netflix Logo'></img>
                    <div className="project-content">
                        <Typography variant="h3">Discord Bulletin Bot</Typography>
                        <Typography variant="h3">@UCSC</Typography>
                        <div className='project-box-body'>
                            <Typography>Project 1 is a very interesting project. It utilizes the NERP stack is very useful.</Typography>
                            <a href="https://github.com/orgs/HKICAC/dashboard" target="_blank" rel="noreferrer">
                                <FaGithubSquare className="social-button"/>
                            </a>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix} alt='Netflix Logo'></img>
                    <div className="project-content">
                        <Typography variant="h2">Project 2</Typography>
                        <div className='project-box-body'>
                            <Typography>Project 1 is a very interesting project. It utilizes the NERP stack is very useful.</Typography>
                            <a href="https://github.com/orgs/HKICAC/dashboard" target="_blank" rel="noreferrer">
                                <FaGithubSquare className="social-button"/>
                            </a>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={4}>
                <div className="project-box">
                    <img className="project-img" src={Netflix} alt='Netflix Logo'></img>
                    <div className="project-content">
                        <Typography variant="h2">Project 3</Typography>
                        <div className='project-box-body'>
                            <Typography>Project 1 is a very interesting project. It utilizes the NERP stack is very useful.</Typography>
                            <a href="https://github.com/orgs/HKICAC/dashboard" target="_blank" rel="noreferrer">
                                <FaGithubSquare className="social-button"/>
                            </a>
                        </div>
                    </div>
                </div>
                </Grid>
            </Grid>
        
        
        </div>
  );
}

export default Project;
