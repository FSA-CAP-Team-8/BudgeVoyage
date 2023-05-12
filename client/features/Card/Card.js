import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";
import Flights from "../Flights/Flights";
const lodging = (Airbnb, Hotel);
const flight = Flights;

const Card = () => {
  const dispatch = useDispatch();
  const flightcard = useSelector((state) => state.flightcard);
  const lodgingcard = useSelector((state) => state.lodgingcard);

  return (
    <>
      <div id="flightcard">
        <button />
        <image id=""></image>
        <div id="flightprice">${flight.price}</div>
      </div>

      <div id="lodgingcard">
        <button />
        <image id=""></image>
        <div id="lodgingprice">${lodging.price}</div>
      </div>
    </>
  );
};

export default Card;
