import React from 'react'
import './slider.css'
import { Button } from '@material-ui/core';
// Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



export default function BtnSlider(props){
    console.log(props);

    
    return (
        <Button 
        className = {props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
        onClick = {props.moveSlide}
        startIcon ={props.direction === "next" ? <KeyboardArrowRightIcon/> : <KeyboardArrowLeftIcon/>} 
        >
            {props.direction === "next" ? "Next":"Prev"}
        </Button>
    );
}