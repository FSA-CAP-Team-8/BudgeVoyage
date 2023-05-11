import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const setOfQuestions = [
    {
      questionText: "What is your budget?",
      answerOption: [{ answerText: "blahblah" }],
    },
    {
      questionText: "Where are you traveling?",
      answerOption: [{ answerText: "blahblah" }],
    },
  ];

  const handleSubmit = (quiz) => {};

  return (
    <div id="quiz">
      <div className="container">
        {/* <h1>{setOfQuestions[0]}</h1> */}
        <h1>Where are you traveling to?</h1>
        <h1>Which airline are you traveling with?</h1>
        <h1>Which days will you need lodging?</h1>
        <h1>What is your lodging preference?</h1>
        <h1>How many adults and children are you traveling with?</h1>
        <h1>Are you traveling with a pet?</h1>
        <div>
          <button id="quizbtn" onClick={() => handleSubmit(quiz)}>
            Ready for Your Voyage
          </button>
          <button id="nextbtn" onClick={() => handleSubmit(quiz)}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
