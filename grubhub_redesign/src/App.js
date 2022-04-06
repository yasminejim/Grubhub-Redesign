import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path =  "/products" element = {<Products/>}></Route>
       <Route exact path =  "/contact" element = {<Contact/>}></Route> */}
          {/* <Route path = "/cart" element = {<Cart/>}></Route>  */}
        </Routes>
      </>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
