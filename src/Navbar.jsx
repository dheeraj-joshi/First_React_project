import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-end  gap-5  position-sticky nav_green py-5 top-0 ">
        <NavLink className="text-white" to="/Home">
          Home
        </NavLink>
        <NavLink className="text-white" to="/About">
          About
        </NavLink>
    
       <NavLink className="text-white" to="/Search">Search</NavLink>
      
        <NavLink className="pe-5 text-white" to="/Cars">
          
          Cars
        </NavLink>
       
      </div>
    </>
  );
}

export default Navbar;
