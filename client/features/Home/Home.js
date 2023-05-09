import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div id="home" className="home">
      <h1>BudgeVoyage</h1>
      <div className="container">
        <NavLink to={`/triproutehere/${trip.id}`}>
          <video src="/budgevoyage.mp4" autoPlay muted loop></video>
        </NavLink>
      </div>
    </div>
  );
};

export default home;
