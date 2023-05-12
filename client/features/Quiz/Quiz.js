import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Airbnb } from "../Airbnb/Airbnb";
import { Hotel } from "../Hotels/Hotel";

const Quiz = () => {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentQuestion < setOfQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const setOfQuestions = [
    {
      questionText: "What is your budget?",
      answer: destination,
    },
    {
      questionText: "Where are you traveling from and to?",
      answer: [checkin, checkout],
    },
    {
      questionText: "How many adults are you traveling with?",
      answer: adults,
    },
    {
      questionText: "What airlines do you prefer?",
      answer: destination,
    },
    {
      questionText: "what days are you booking lodging?",
      answer: [checkin, checkout],
    },
    {
      questionText: "what is your lodging preference?",
      answer: destination,
    },
    {
      questionText: "how many rooms or beds do you need?",
      answer: destination,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div id="quiz">
        <div className="container">
          <h1>{setOfQuestions[currentQuestion].questionText}</h1>
          {currentQuestion === 0 && (
            <input
              type="text"
              name="budget"
              value={answers.budget}
              onChange={handleInputChange}
            />
          )}
          {currentQuestion === 1 &&
            !answers.travelFrom &&
            !answers.travelTo && (
              <>
                <input
                  type="text"
                  name="travelFrom"
                  value={answers.travelFrom}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="travelTo"
                  value={answers.travelTo}
                  onChange={handleInputChange}
                />
              </>
            )}
          {currentQuestion === 2 && (
            <>
              <input
                type="text"
                name="budget"
                value={answers.budget}
                onChange={handleInputChange}
              />
            </>
          )}
          {currentQuestion === 3 && (
            <>
              <input
                type="text"
                name="budget"
                value={answers.budget}
                onChange={handleInputChange}
              />
            </>
          )}
          {currentQuestion === 4 && (
            <>
              <input
                type="text"
                name="budget"
                value={answers.budget}
                onChange={handleInputChange}
              />
            </>
          )}
          {currentQuestion === 5 && (
            <>
              <input
                type="text"
                name="budget"
                value={answers.budget}
                onChange={handleInputChange}
              />
            </>
          )}
          {currentQuestion === 6 && (
            <>
              <input
                type="text"
                name="budget"
                value={answers.budget}
                onChange={handleInputChange}
              />
            </>
          )}

          <div>
            <div id="submitbtn">
              <button id="nextbtn" type="submit">
                {isSubmitted ? "Ready for you Voyage" : "Next"}
              </button>
              {/* <>
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
              </> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Quiz;
