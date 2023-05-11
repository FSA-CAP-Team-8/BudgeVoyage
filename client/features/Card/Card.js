import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  return (
    <>
      <div id="card"></div>
    </>
  );
};

export default Card;
