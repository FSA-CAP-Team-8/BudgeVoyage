import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";

const Quiz = () => {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    budget: "",
    travelFrom: "",
    travelTo: "",
  });
  const [showBudgeCard, setShowBudgeCard] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  const setOfQuestions = [
    {
      questionText: "What is your budget?",
      answerOption: { destination },
    },
    {
      questionText: "Where are you traveling from and to?",
      answerOption: { answertest: "New York" },
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div id="quiz">
        <div className="container">
          <h1>{setOfQuestions[0].questionText}</h1>
          <input
            type="text"
            name="budget"
            value={answers.budget}
            onChange={handleInputChange}
          />

          <h1>{setOfQuestions[1].questionText}</h1>
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
          <div>
            <div id="submitbtn">
              <button id="nextbtn" type="submit">
                {isSubmitted ? "Ready for you Voyage" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Quiz;

// {
//   isSubmitted && (
//     <>
//       <Hotel
//         destination={destination}
//         checkin={checkin}
//         checkout={checkout}
//         adults={adults}
//         children={children}
//         childAges={childAges}
//       />
//       <Airbnb
//         destination={destination}
//         checkin={checkin}
//         checkout={checkout}
//         adults={adults}
//         children={children}
//         childAges={childAges}
//       />
//     </>
//   );
// }
