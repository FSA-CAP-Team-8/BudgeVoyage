import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";
import { current } from "@reduxjs/toolkit";

const Quiz = () => {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "destination":
        setDestination(value);
        break;
      case "checkin":
        setCheckin(value);
        break;
      case "checkout":
        setCheckout(value);
        break;
      case "setAdults":
        setAdults(value);
        break;
      default:
        break;
    }
  };

  const setOfQuestions = [
    {
      questionText: "Where are you traveling from and to?",
      inputType: "text",
      name: "destination",
      value: destination,
    },
    {
      questionText: "what days are you booking lodging?",
      inputType: "text",
      name: "checkincheckout",
      value: [checkin],
    },
    {
      questionText: "How many adults are you traveling with?",
      inputType: "text",
      name: "adults",
      value: adults,
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < setOfQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="quiz">
        <div className="container">
          <h1>{setOfQuestions[currentQuestion].questionText}</h1>
          <input
            type={setOfQuestions[currentQuestion].inputType}
            name={setOfQuestions[currentQuestion].name}
            value={setOfQuestions[currentQuestion].value}
            onChange={handleInputChange}
          />
          {currentQuestion < setOfQuestions.length - 1 && (
            <button type="button" onClick={handleNextQuestion}>
              next
            </button>
          )}
          {currentQuestion === setOfQuestions.length - 1 && (
            <button type="submit">ready for your Voyage</button>
          )}
          {isSubmitted && (
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
          )}
        </div>
      </div>
    </form>
  );
};

export default Quiz;
