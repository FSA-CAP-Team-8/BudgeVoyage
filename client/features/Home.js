import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div id="home" className="home">
      <NavLink to={"/quiz"}>
        <video src="/budgevoyage.mp4" autoPlay muted loop></video>{" "}
      </NavLink>
      <div className="overlay">
        <h2>
          Start <br></br>your <br></br>Voyage
          <br></br>
          <p> take our quiz</p>
        </h2>
      </div>
    </div>
  );
};

export default home;
