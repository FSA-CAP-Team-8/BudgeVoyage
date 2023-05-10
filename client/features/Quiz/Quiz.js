import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  return <></>;
};
