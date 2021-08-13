import React, {useState} from 'react';
import { SliderData } from './SliderData';
import "../App.css";
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";

const  ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent((current === length - 1) ? 0: current + 1 )
    }
    const previousSlide = () =>{
        setCurrent((current === 0) ? length - 1 : current -  1)
    }
console.log(current)

    if(!Array.isArray(slides) || length <= 0){
        return null;
    }


    return (
       <section className="slider">
        <FaArrowCircleLeft className="left-arrow" onClick={previousSlide}/>
        <FaArrowCircleRight className="right-arrow" onClick={nextSlide}/>
        
       {
        SliderData.map((slide, index) => {
            return (
                <div className={index === current? "active-slide" : "slide"} key={index}>
                    {index === current && (<img src={slide.image} alt="food image" className="image" />)}
               </div>)
               }
            )
            }

       </section>
    )
}

export default ImageSlider
