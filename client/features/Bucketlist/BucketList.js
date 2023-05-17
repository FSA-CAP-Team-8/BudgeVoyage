import React from "react";
import { NavLink } from "react-router-dom";

const bucketlist = () => {
  return (
    <div id="bucketlist">
      <div className="bucketcontainer">
        <div className="Tripcontainer">
          <span className="LodgingCard">
            <img
              className="FlightCardImage"
              src="AbnbResult.webp"
              alt="Airbnb-Listing-img"
            ></img>
            <div className="LodgingCardAmtDays">June 10 - June 12</div>
            <div className="LodgingCardPriceTotal">$500 total</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default bucketlist;
