import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";

const Quiz = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setDestination(event.target.value);
  };

  const handleCheckinChange = (event) => {
    setCheckin(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckout(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handleChildAgeChange = (index, event) => {
    const newChildAges = [...childAges];
    newChildAges[index] = event.target.value;
    setChildAges(newChildAges);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const setOfQuestions = [
    {
      questionText: "What is your budget?",
      answerOption: { answertest: "New York" },
    },
    {
      questionText: "Where are you traveling from and to ?",
      answerOption: { answertest: "New York" },
    },
    // {
    //   questionText: "How many adults and children are you traveling with?",
    //   answerOption: { value: children, value: adults },
    // },
    // {
    //   questionText: "what airlines do you prefer?",
    //   answerOption: { value: destination },
    // },
    // {
    //   questionText: "What days are you staying?",
    //   answerOption: { value: checkin, value: checkout },
    // },
    // {
    //   questionText: "What is your lodging preference?",
    //   answerOption: { value: destination },
    // },
    // {
    //   questionText: "How many rooms or bed do you need?",
    //   answerOption: { value: destination },
    // },
  ];

  return (
    <div id="quiz">
      <div className="container">
        <h1>{setOfQuestions[0]}</h1>
        <h1>{setOfQuestions[1]}</h1>
        {/* <h1>{setOfQuestions[2]}</h1>
        <h1>{setOfQuestions[3]}</h1>
        <h1>{setOfQuestions[4]}</h1>
        <h1>{setOfQuestions[5]}</h1> */}
        <div>
          <div id="submitbtn">
            {!setOfQuestions[5] ? (
              <button id="nextbtn" onClick={() => handleSubmit(quiz)}>
                next
              </button>
            ) : (
              <button id="quizbtn" onClick={() => handleSubmit(quiz)}>
                Ready for Your Voyage
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
