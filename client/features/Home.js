import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div id="home" className="home">
      {/* <NavLink to={`/triproutehere/${trip.id}`}> */}
      <video src="/budgevoyage.mp4" autoPlay muted loop></video>
      <div class="overlay">
        <h2>
          Take our Quiz<br></br>
          and start your travel journey
        </h2>
      </div>
      {/* </NavLink> */}
    </div>
  );
};

export default home;
