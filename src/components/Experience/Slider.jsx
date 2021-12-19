import React, {useState} from 'react'
import './slider.css'
import BtnSlider from './BtnSlider'
import { Typography } from '@material-ui/core';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Grid from '@material-ui/core/Grid';

const data =[
    `1Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce tincidunt metus a ultrices tempor. Nam ante nulla, ullamcorper eu vehicula at, pharetra ut nisl. Vivamus dignissim mattis nulla, 
    vel ullamcorper sem. Vestibulum sollicitudin nibh odio, eget dictum ex blandit eu. 
    Sed eu vehicula elit. Ut dictum neque id nunc bibendum venenatis. Maecenas in nisl eu mi vehicula volutpat. 
    Aliquam hendrerit posuere augue, vitae convallis felis congue ut. Fusce vitae dapibus mi. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    `,

    `2Aliquam blandit quam quis ligula mattis fermentum. 
    Proin et augue vel nisl laoreet egestas consequat ut dui. 
    Aenean justo sapien, tempus in nulla a, congue laoreet quam. 
    Donec arcu nisl, mattis sed lorem ac, gravida sagittis massa. 
    Sed a sem odio. Curabitur porttitor mauris ut fringilla sodales. 
    Pellentesque facilisis ex elit, vel maximus lorem sollicitudin nec. 
    Praesent nec tempor sapien. Duis nec nisl vitae nisl malesuada interdum non ac ante.`,

    `3Fusce sed feugiat dolor, et euismod ligula. 
    Pellentesque a convallis enim. 
    Praesent vulputate tempor ante et venenatis. 
    Nulla vel ultrices sem. 
    Praesent eleifend erat turpis, 
    eget luctus nunc suscipit id. 
    Curabitur a volutpat odio. 
    Suspendisse vel dui pulvinar, 
    porta elit a, pretium tortor.`,
];

export default function Slider(props){
    const [slideIndex, setSlideIndex] = useState(0);

    // Functions to control the slide navigation: Next
    const nextSlide = () =>{
        if (slideIndex !== props.data.length - 1){
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(0);
        }
    }
    // Functions to control the slide navigation: Prev
    const prevSlide = () =>{
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 0){
            setSlideIndex( props.data.length - 1);
        }
    }

    const displayList = (data) => {
        // data should be seperated by \n
        return (
            <ul>
                {data.split('\n').map(item=><li>{item}</li>)}
            </ul>
            
        )
    }

    // Renders the slides
    return (
        <div className = "container-slider">
            <Grid className="experience-content" container spacing={3}>
                <Grid item xs={1}>
                <FaAngleLeft className="slider-button"
                    onClick={prevSlide}/>
                </Grid>
                <Grid item xs={10}>
                    <h3 className="slide-content-header">{props.header ? props.header[slideIndex] : "no header was passed"}</h3>
                    <p className="slide-content">
                        {props.data ? props.data[slideIndex] : "no data was passed"}
                    </p>
                    
                </Grid>
                <Grid item xs={1}>
                <FaAngleRight className="slider-button"
                    onClick={nextSlide}/>
                </Grid>
            </Grid>
            {/* <FaAngleLeft className="slider-button"/>
            <BtnSlider className="slider-button" moveSlide={prevSlide} direction ="prev"/>
            <div className = "slide">
                
                {data[slideIndex]}
            </div> */}
            
            {/* <BtnSlider moveSlide={nextSlide} direction ="next"/> */}

        </div>
    );
}