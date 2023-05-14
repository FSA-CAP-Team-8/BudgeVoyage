import React from "react";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";
import { useState } from "react";

const Card = () => {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);

  return (
    <>
      {/* <div id="flightcard">
        <button />
        <image id=""></image>
        <div id="flightprice">${flight.price}</div>
      </div> */}

      <div id="lodgingcard">
        <button />
        {/* <image id=""></image> */}
        <div id="lodgingprice">${destination}</div>
        <>
          <Hotel
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            adults={adults}
          />
          <Airbnb
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            adults={adults}
          />
        </>
      </div>
    </>
  );
};

export default Card;
