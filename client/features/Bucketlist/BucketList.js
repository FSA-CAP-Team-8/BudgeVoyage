import React from "react";

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
            <p>$228.83</p>
          </div>
          <div className="TripTotal">
            <button id="remove" type="button">
              Remove This Voyage
            </button>
            Voyage total: $1127.38
          </div>
        </div>
      </div>
    </div>
  );
};
export default bucketlist;