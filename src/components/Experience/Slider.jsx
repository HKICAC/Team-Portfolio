import React, {useState} from 'react'
import './slider.css'
import BtnSlider from './BtnSlider'
import { Typography } from '@material-ui/core';

const data =[
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce tincidunt metus a ultrices tempor. Nam ante nulla, ullamcorper eu vehicula at, pharetra ut nisl. Vivamus dignissim mattis nulla, 
    vel ullamcorper sem. Vestibulum sollicitudin nibh odio, eget dictum ex blandit eu. 
    Sed eu vehicula elit. Ut dictum neque id nunc bibendum venenatis. Maecenas in nisl eu mi vehicula volutpat. 
    Aliquam hendrerit posuere augue, vitae convallis felis congue ut. Fusce vitae dapibus mi. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    `,
    
    `Aliquam blandit quam quis ligula mattis fermentum. 
    Proin et augue vel nisl laoreet egestas consequat ut dui. 
    Aenean justo sapien, tempus in nulla a, congue laoreet quam. 
    Donec arcu nisl, mattis sed lorem ac, gravida sagittis massa. 
    Sed a sem odio. Curabitur porttitor mauris ut fringilla sodales. 
    Pellentesque facilisis ex elit, vel maximus lorem sollicitudin nec. 
    Praesent nec tempor sapien. Duis nec nisl vitae nisl malesuada interdum non ac ante.`,

    `Fusce sed feugiat dolor, et euismod ligula. 
    Pellentesque a convallis enim. 
    Praesent vulputate tempor ante et venenatis. 
    Nulla vel ultrices sem. 
    Praesent eleifend erat turpis, 
    eget luctus nunc suscipit id. 
    Curabitur a volutpat odio. 
    Suspendisse vel dui pulvinar, 
    porta elit a, pretium tortor.`,
];

export default function Slider(){
    const [slideIndex, setSlideIndex] = useState(1);

    console.log(slideIndex);
    console.log(data.length);

    // Functions to control the slide navigation: Next
    const nextSlide = () =>{
        if (slideIndex !== data.length){
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1);
        }
    }
    // Functions to control the slide navigation: Prev
    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex( data.length);
        }
    }

    // Renders the slides
    return (
        <div className = "container-slider">
            <div className = "slide">
                {data.map( (obj, index) => {
                    return(
                        <div
                        key = {index}
                        className ={slideIndex === index + 1 ?
                            "slide active-anim" 
                            : "slide"}
                        >
                                {obj}
                        </div>
                    );
                })
                }
            </div>
            <BtnSlider moveSlide={prevSlide} direction ="prev"/>
            <BtnSlider moveSlide={nextSlide} direction ="next"/>

        </div>
    );
}