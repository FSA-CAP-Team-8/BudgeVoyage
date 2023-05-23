import React from "react";

const bucketlist = () => {
  return (
    <div id="bucketlist">
      {" "}
      <div className="bucketcontainer">
        {" "}
        <div className="Tripcontainer">
          {" "}
          <div className="LodgingCard">
            <img
              className="LodgingCardImage"
              src="./photogrid/laAirbnb.webp"
              alt="Airbnb-Listing-img"
            ></img>
            <p>June 5 - June 10</p>
            <p>$899</p>
          </div>{" "}
          <div className="FlightCard">
            {" "}
            <img
              className="FlightCardImage"
              src="./photogrid/spirit.png"
              alt="Flight-Listing-img"
            ></img>
            <p>June 5 - June 10</p>
            <p>$298</p>
          </div>
          <div className="TripTotal">
            <button id="remove" type="button">
              Remove This Voyage
            </button>
            $1197 Voyage Total
          </div>
        </div>
      </div>
    </div>
  );
};
export default bucketlist;
