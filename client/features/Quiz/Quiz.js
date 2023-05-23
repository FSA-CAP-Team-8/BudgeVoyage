import React, { useState } from "react";
import Airbnb from "../Airbnb/Airbnb";
import Flights from "../Flights/Flights";
import { fetchDestinationCode, fetchOriginCode } from "../Flights/flightsSlice";
import { useDispatch } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const [checkinCheckout, setCheckinCheckout] = useState({
    checkin: "",
    checkout: "",
  });
  const [dateReturnDate, setDateReturnDate] = useState({
    date: "",
    returnDate: "",
  });
  const [adults, setAdults] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "checkin" || name === "checkout") {
      setCheckinCheckout({
        ...checkinCheckout,
        [name]: value,
      });
    } else if (name === "date" || name === "returnDate") {
      setDateReturnDate({
        ...dateReturnDate,
        [name]: value,
      });
    } else {
      switch (name) {
        case "origin":
          setOrigin(value);
          break;
        case "destination":
          setDestination(value);
          break;
        case "price":
          setPrice(value);
          break;
        case "adults":
          setAdults(value);
          break;
        default:
          break;
      }
    }
  };

  const setOfQuestions = [
    {
      questionText: "Whats your travel budget?", //forflights
      inputType: "number",
      name: "price",
      value: price,
    },
    {
      questionText: "Where are you traveling from?", //forflights
      inputType: "text",
      name: "origin",
      value: origin,
    },
    {
      questionText: "Where are you traveling to?", //forflights
      inputType: "text",
      name: "destination",
      value: destination,
    },
    {
      questionText: "What is your first day of travel?", //forflights
      inputType: "date",
      name: "date",
      value: dateReturnDate.date,
    },
    {
      questionText: "When do you plan to return?",
      inputType: "date",
      name: "returnDate",
      value: dateReturnDate.returnDate,
    },
    {
      questionText: "Where will you be booking your stay?",
      inputType: "text",
      name: "destination",
      value: destination,
    },
    {
      questionText: "what is your first day of lodging?",
      inputType: "date",
      name: "checkin",
      value: checkinCheckout.checkin,
    },
    {
      questionText: "what is your last day of lodging?",
      inputType: "date",
      name: "checkout",
      value: checkinCheckout.checkout,
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(fetchOriginCode({ origin }));
      await dispatch(fetchDestinationCode({ destination }));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error fetching origin and destination codes:", error);
    }
  };

  return (
    <>
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <img className="bgquiz" src="./bgquiz/4.png"></img>
          <div id="quiz">
            <div className="container">
              <h1>{setOfQuestions[currentQuestion].questionText}</h1>
              <input
                id="input"
                type={setOfQuestions[currentQuestion].inputType}
                name={setOfQuestions[currentQuestion].name}
                value={setOfQuestions[currentQuestion].value}
                onChange={handleInputChange}
              />
              {currentQuestion < setOfQuestions.length - 1 && (
                <button id="nextbtn" type="button" onClick={handleNextQuestion}>
                  next
                </button>
              )}
              {currentQuestion === setOfQuestions.length - 1 && (
                <button id="quizbtn" type="submit">
                  ready for your Voyage
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <>
          <div id="cardscontainer">
            <div id="lodgingcard">
              <Airbnb
                destination={destination}
                checkin={checkinCheckout.checkin}
                checkout={checkinCheckout.checkout}
                adults={adults}
                price={price}
              />
            </div>

            <div id="flightcard">
              <Flights
                origin={origin}
                destination={destination}
                date={dateReturnDate.date}
                returnDate={dateReturnDate.returnDate}
                adults={adults}
                price={price}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
