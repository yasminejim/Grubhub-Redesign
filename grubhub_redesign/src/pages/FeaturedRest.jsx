import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const IconSlider = (props) => {


  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500
  }
  return (
    <>
      <div className='icon-slider-container'>
        <div id="icon-slider">
          <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
          <div id="slider">
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images/pizzaemoji.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Pizza</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images 3/burgeremoji2.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">American</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images/tacoemoji.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Mexican</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images/png-transparent-shish-kebab-doner-kebab-barbecue-fast-food-vegetables-and-chicken-food-animals-chicken-thumbnail-removebg-preview.png" width="80%" height="120px"></img>
              </div>
              <p className="slider-card-title">Barbecue</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images 3/pastaemoji.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Italian</p>

            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images 3/phoemoji.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Asian</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images/salademoji.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Mediterranean</p>
            </div>
            <div className="slider-card">
              <div className="slider-card-image" >
                <img src="./Images 3/asianfoodemoji2.png" width="100%" ></img>
              </div>
              <p className="slider-card-title">Seafood</p>
            </div>
            {/* <div id="slider">
               {
               slides.map((slide,index) => {
                   return(
                       
                       
                   )
               })
            } */}
          </div>

          <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default IconSlider;




















// 





// const FeaturedRest = () => {
//   const targetDiv = document.getElementById("toggle");
//   const btn = document.getElementById("third");
//   btn.onclick = function () {
//     if (targetDiv.style.display !== "none") {
//       targetDiv.style.display = "none";
//     } else {
//       targetDiv.style.display = "block";
//     }
//   };

//   return (
//     <div>
//       <div class="hero-container">
//         <div class="hero-image">
//           <div class="Search-Text">
//             <h1>You want it. We get it.</h1>
//           </div>
//           <div class="Search-bar">
//             <button>search button</button>
//           </div>
//           <main>
//             <div class="Feature-title">
//               <h2>FEATURED RESTURANTS NEAR YOU</h2>
//             </div>
//             <div class="container">
//               <div class="card">
//                 <div class="card-image food-1"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//                 <div class="dropdown">
//                   <div id="third">This is the THIRD div</div>
//                   <div id="toggle">Hide THIRD div</div>
//                 </div>
//               </div>

//               <div class="card">
//                 <div class="card-image food-2"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//               </div>

//               <div class="card">
//                 <div class="card-image food-3"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//               </div>

//               <div class="card">
//                 <div class="card-image food-4"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//               </div>

//               <div class="card">
//                 <div class="card-image food-5"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//               </div>

//               <div class="card">
//                 <div class="card-image food-6"></div>
//                 <h2>title</h2>
//                 <h3>miles</h3>
//               </div>
//             </div>

//             <div class="dropdown">
//               <div id="third">This is the THIRD div</div>
//               <div id="toggle">Hide THIRD div</div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedRest;
