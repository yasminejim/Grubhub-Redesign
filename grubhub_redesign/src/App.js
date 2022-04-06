import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Contact from "grubhub_redesign/src/pages/Contact";

function App() {
  
  return (
    <Router>
      
        <Navbar /> <>
        <Routes>
        <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
        </>
    </Router>
  );
}

export default App;