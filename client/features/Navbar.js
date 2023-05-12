/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

//we need to figure out how are login system is going to work
const Navbar = () => {
  return (
    <header>
      <img className="logo" src="budgeVoyage2.png"></img>
      <nav>
        <NavLink to="/">BudgeVoyage</NavLink>
        <NavLink to="/ourstory">Our Story</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/bucketlist">
          <img className="bucketlogo" src="bucketListlogo.png"></img>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
