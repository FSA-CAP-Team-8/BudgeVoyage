import React, { useState } from "react";
import Airbnb from "../Airbnb/Airbnb";
import Flights from "../Flights/Flights";
import { fetchDestinationCode, fetchOriginCode } from "../Flights/flightsSlice";
import { useDispatch } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");
  const [adults, setAdults] = useState("");
  const [checkinCheckout, setCheckinCheckout] = useState({
    checkin: "",
    checkout: "",
  });
  const [dateReturnDate, setDateReturnDate] = useState({
    date: "",
    returnDate: "",
  });
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
        case "destination":
          setDestination(value);
          break;
        case "adults":
          setAdults(value);
          break;
        case "origin":
          setOrigin(value);
          break;
        case "price":
          const filteredPrice = value.replace(/[^0-9.]/g, "");
          const parsedPrice = parseFloat(filteredPrice);
          if (!isNaN(parsedPrice)) {
            setPrice(parsedPrice);
          } else {
            setPrice(undefined);
          }
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
      hasNext: "true",
      currency: "$",
    },
    {
      questionText: "Where are you traveling from?", //forflights
      inputType: "text",
      name: "origin",
      value: origin,
      hasNext: "true",
    },
    {
      questionText: "Where are you traveling to?", //forflights
      inputType: "text",
      name: "destination",
      value: destination,
      hasNext: "true",
    },
    {
      questionText: "What days are you traveling?", //forflights
      inputType: "date",
      name: "date",
      value: dateReturnDate.date,
      hasNext: "false",
    },
    {
      inputType: "date",
      name: "returnDate",
      value: dateReturnDate.returnDate,
      hasNext: "true",
    },
    {
      questionText: "Where will you be booking your stay?",
      inputType: "text",
      name: "destination",
      value: destination,
      hasNext: "true",
    },
    {
      questionText: "what days are you booking lodging?",
      inputType: "date",
      name: "checkin",
      value: checkinCheckout.checkin,
      hasNext: "false",
    },
    {
      inputType: "date",
      name: "checkout",
      value: checkinCheckout.checkout,
      hasNext: "true",
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
              {currentQuestion < setOfQuestions.length - 1 &&
                setOfQuestions[currentQuestion].hasNext && (
                  <button
                    id="nextbtn"
                    type="button"
                    onClick={handleNextQuestion}
                  >
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
