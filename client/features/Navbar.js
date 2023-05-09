/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./store";

//we need to figure out how are login system is going to work
const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <img className="logo" src="budgeVoyage2.png"></img>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">Our Story</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Link to="/cart">
              <img className="bucket" src="bucketListlogo.png"></img>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">
              <img className="bucket" src="bucketListlogo.png"></img>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
