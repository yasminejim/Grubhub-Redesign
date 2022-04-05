import React from 'react';
import "./App.css";


const Featured = () =>{
    return(
<>
<div className="Search-Text">
    <h1>You want it. We get it.</h1>
</div>

<div className="Search-bar">
</div>

<main>

<div className="Feature-title">
    <h2>FEATURED RESTURANTS NEAR YOU</h2>
</div>

<div className="card">
    <div className={'card-image food-' + index}></div>
    <h3>{title}</h3>
    <h4>{miles}</h4>
</div>


</main>




</>
    )
}
export default Featured;