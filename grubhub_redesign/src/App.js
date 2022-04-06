<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Contact from "grubhub_redesign/src/pages/Contact";
=======
import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Products from './pages/Products';
// import Cart from './components/Cart';
import "./App.css";
import "./contact.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> Bria

function App() {
  return (
    <Router>
<<<<<<< HEAD
      
        <Navbar /> <>
        <Routes>
        <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
        </>
=======
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          {/* <Route exact path =  "/products" element = {<Products/>}></Route>
      //  
       {/* <Route path = "/cart" element = {<Cart/>}></Route>  */}
        </Routes>
      </>
      {/* <Footer/> */}
>>>>>>> Bria
    </Router>
  );
}

export default App;
