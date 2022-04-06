import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src="./mainlogo.png" className="App-logo" alt="logo" />
        </header>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;