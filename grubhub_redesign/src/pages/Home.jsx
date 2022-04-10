import React from "react";
import HomeSlider from "../Components/HomeSlider";

const Home = () => {
  return (
    <>
      <main className="home-container">
        <img className="hero" src="./Images/backgroundimage.jpg"></img>
        <div className="main-text">
          <img src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Symbol.png" />
          <h1>Order food right to your door!</h1>

          <button>Order Now</button>
        </div>
        <div>
          <h1>Icons slider:will have filter click connected to dtatase</h1>
          <h1>
            <a href="grubhub_redesign/src/assests/api.html">MAPS</a>
          </h1>
          <h1>add search bar to hero image above button</h1>
        </div>
        <HomeSlider />
      </main>
    </>
  );
};

export default Home;
