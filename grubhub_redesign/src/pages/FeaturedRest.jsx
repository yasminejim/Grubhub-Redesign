import React from "react";

const FeaturedRest = () => {
  const targetDiv = document.getElementById("toggle");
  const btn = document.getElementById("third");
  btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    } else {
      targetDiv.style.display = "block";
    }
  };

  return (
    <div>
      <div class="hero-container">
        <div class="hero-image">
          <div class="Search-Text">
            <h1>You want it. We get it.</h1>
          </div>
          <div class="Search-bar">
            <button>search button</button>
          </div>
          <main>
            <div class="Feature-title">
              <h2>FEATURED RESTURANTS NEAR YOU</h2>
            </div>
            <div class="container">
              <div class="card">
                <div class="card-image food-1"></div>
                <h2>title</h2>
                <h3>miles</h3>
                <div class="dropdown">
                  <div id="third">This is the THIRD div</div>
                  <div id="toggle">Hide THIRD div</div>
                </div>
              </div>

              <div class="card">
                <div class="card-image food-2"></div>
                <h2>title</h2>
                <h3>miles</h3>
              </div>

              <div class="card">
                <div class="card-image food-3"></div>
                <h2>title</h2>
                <h3>miles</h3>
              </div>

              <div class="card">
                <div class="card-image food-4"></div>
                <h2>title</h2>
                <h3>miles</h3>
              </div>

              <div class="card">
                <div class="card-image food-5"></div>
                <h2>title</h2>
                <h3>miles</h3>
              </div>

              <div class="card">
                <div class="card-image food-6"></div>
                <h2>title</h2>
                <h3>miles</h3>
              </div>
            </div>

            <div class="dropdown">
              <div id="third">This is the THIRD div</div>
              <div id="toggle">Hide THIRD div</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRest;
