import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const IconSlider = (props) => {

    const slides = [1,2,3,4,5,6,7,8];

    const slideLeft=()=>{
        let slider =document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft+500
    }

    const slideRight=()=>{
        let slider =document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft-500
    }
  return (
      <>
    <div className='icon-slider-container'>
        <div id="icon-slider">
           <MdChevronLeft size ={40} className="slider-icon left" onClick={slideLeft}/>
           
           <div id="slider">
               {
               slides.map((slide,index) => {
                   return(
                       <div className= "slider-card">
                           <div className ="slider-card-image">

                           </div>
                       </div>
                   )
               })
            }
           </div>
           
           <MdChevronRight size ={40} className="slider-icon right" onClick={slideRight}/>
        </div>
        </div>
        </>
  )
}

export default IconSlider;