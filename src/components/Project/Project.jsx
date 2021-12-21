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
import useWindowDimensions from '../Window/Window';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReactTypingEffect from 'react-typing-effect';

// icons
import { FaReact, FaDiscord, FaGithub, FaMapMarkedAlt, FaJava, FaDocker } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { SiElectron, SiApachesolr, SiSpringboot, SiSequelize } from "react-icons/si";

// pics
import Netflix from "../../img/netflix.jpg";
import Discordbot from "../../img/discordbot.png";
import ArcgisMap from "../../img/arcgismap.png";
import Electron from "../../img/electron.png";
import Blackrock from "../../img/blackrock.jpg";


function Project() {
    const { height, width } = useWindowDimensions();
    const icons = {
        'react': <FaReact/>
    }

    return (
        <div id="project" className="project">
            <Typography variant="h3">Projects</Typography>
            <Grid className="experience-grid" container spacing={3}>
            <Grid item xs={12} sm={4}>
                <div className="project-box">
                    <img className="project-img" src={Discordbot} alt='Discord Bot Capture'></img>
                    <div className="project-content">
                        <Typography variant="h4">Discord Bulletin Bot</Typography>
                        <Typography variant="h4">@UCSC</Typography>
                        <div className='project-box-body'>
                            <Typography>Created a discord bot so student can receive important message via discord DMs. Students can subscribe to their different classes and clubs</Typography>
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaReact/>
                                </ListItemIcon>
                                <ListItemText primary="React" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <DiSqllite />
                                </ListItemIcon>
                                <ListItemText primary="SQLite" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaDiscord />
                                </ListItemIcon>
                                <ListItemText primary="Discord.js" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaDocker />
                                </ListItemIcon>
                                <ListItemText primary="Docker" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <SiSequelize />
                                </ListItemIcon>
                                <ListItemText primary="Sequelize" />
                            </ListItem>
                            </List>
                            <a href="https://github.com/zkm1/discordbulletinbot" target="_blank" rel="noreferrer">
                                <FaGithub className="project-github"/>
                            </a>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="project-box">
                    <img className="project-img" src={ArcgisMap} alt='Arcgis Map capture'></img>
                    <div className="project-content">
                        <Typography variant="h4">CalEnviroScreen Map</Typography>
                        <Typography variant="h4">@DTSC</Typography>
                        <div className='project-box-body'>
                            <Typography>Created a map with Eris ArcGIS JS APIthat involved with over 10,000
California's HWMP facilities data from DTSC web server endpoints. </Typography>
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaReact/>
                                </ListItemIcon>
                                <ListItemText primary="React" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaMapMarkedAlt />
                                </ListItemIcon>
                                <ListItemText primary="Eris ArcGis" />
                            </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="project-box">
                    <img className="project-img" src={Blackrock} alt='blackrock Logo'></img>
                    <div className="project-content">
                        <Typography variant="h4">Aladdin Database Visualizer</Typography>
                        <Typography variant="h4">@Blackrock</Typography>
                        <div className='project-box-body'>
                            <Typography>Created a discord bot so student can receive important message via discord DMs. Students can subscribe to their different classes and clubs</Typography>
                            <List>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaReact/>
                                </ListItemIcon>
                                <ListItemText primary="React" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <SiElectron />
                                </ListItemIcon>
                                <ListItemText primary="Electron" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <SiApachesolr />
                                </ListItemIcon>
                                <ListItemText primary="Solr" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <FaJava />
                                </ListItemIcon>
                                <ListItemText primary="Java" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon className="project-icon">
                                    <SiSpringboot />
                                </ListItemIcon>
                                <ListItemText primary="Springboot" />
                            </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                </Grid>
            </Grid>
        
        
        </div>
  );
}

export default Project;
