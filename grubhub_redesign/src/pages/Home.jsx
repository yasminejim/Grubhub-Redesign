import React from "react";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <main>
        <img className="hero" src="./Images/backgroundimage.jpg"></img>
        <div className="main-text">
          <h1>Order food right to your door!</h1>
          <form></form>
          <button></button>
        </div>

        <HomeSlider />
      </main>
    </>
  );
};

export default Home;
