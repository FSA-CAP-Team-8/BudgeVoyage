import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  return (
    <>
      <div id="quiz">
        <h1>What is your budget?</h1>
        <h1>Where are you traveling to?</h1>
        <h1>Which airline are you traveling with?</h1>
        <h1>Which days will you need lodging?</h1>
        <h1>What is your lodging preference?</h1>
        <h1>How many adults and children are you traveling with?</h1>
        <h1>Are you traveling with a pet?</h1>
        <div>
          <button onClick={() => handleSubmit(quiz)}>
            READY FOR MY VOYAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
