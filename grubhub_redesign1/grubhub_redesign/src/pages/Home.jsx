import React from "react";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <main className="home-container">
        <img className="hero" src="./Images/backgroundimage.jpg"></img>
        <div className="main-text">
            <img  src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Symbol.png"/>
          <h1>Order food right to your door!</h1>
      
          <button>Order Now</button>
        </div>

        <HomeSlider />
      </main>
    </>
  );
};

export default Home;
