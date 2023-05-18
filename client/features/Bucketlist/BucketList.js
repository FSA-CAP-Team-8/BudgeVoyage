import React from "react";
import { NavLink } from "react-router-dom";

const bucketlist = () => {
  return (
    <div id="bucketlist">
      <div className="bucketcontainer">
        <div className="Tripcontainer">
          <span className="LodgingCard">
            <img
              className="LodgingCardImage"
              src="AbnbResult.webp"
              alt="Airbnb-Listing-img"
            ></img>
            <div className="LodgingCardAmtDays">June 10 - June 12</div>
            <div className="LodgingCardPriceTotal">$500 total</div>
          </span>
          <span className="FlightCard">
            <img
              className="FlightCardImage"
              src="FlightResult.jpg"
              alt="Flight-Listing-img"
            ></img>
            <div className="FlightCardDates">June 10 - June 12</div>
            <div className="FlightCardPriceTotal">$458 total</div>
          </span>
          <span className="TripTotal" height="20px" width="40px">
            $958 Voyage Total
          </span>
          <div>
            {" "}
            <button id="remove" type="button">
              Remove This Voyage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bucketlist;
