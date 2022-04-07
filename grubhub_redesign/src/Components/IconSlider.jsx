import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const IconSlider = (props) => {

    const slides = [1,2,3,4,5,6,7,8];
  return (
      <>
    <div className='icon-slider-container'>
        <div id="icon-slider">
           <MdChevronLeft size ={40} className="slider-icon left"/>
           
           <div id="slider">
               {
               slides.map((slide,index) => {
                   return(
                       <div className= "slider-card">

                       </div>
                   )
               })
            }
           </div>
           
           <MdChevronRight size ={40} className="slider-icon right"/>
        </div>
        </div>
        </>
  )
}

export default IconSlider;