import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
   <nav className="navbar">
        <NavLink to="/" className="logo"> <img src ="./Images/Logo.png" alt="Grubhub Logo" height= "85" width="160"></img> </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Featured Resturants</NavLink></li>
          <li><NavLink to="/contact">Sign Up</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        

        </ul>
      </nav>
   </>
  )
}

export default Navbar;