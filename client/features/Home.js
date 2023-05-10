import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div id="home" className="home">
      {/* <NavLink to={`/triproutehere/${trip.id}`}> */}
      <video src="/budgevoyage.mp4" autoPlay muted loop></video>
      <div class="overlay">
        <h2>
          Start <br></br>your <br></br>Voyage
          <br></br>
          take our quiz
        </h2>
      </div>
      {/* </NavLink> */}
    </div>
  );
};

export default home;
