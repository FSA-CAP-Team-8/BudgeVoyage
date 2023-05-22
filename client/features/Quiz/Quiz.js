import React, { useState } from "react";
import Airbnb from "../Airbnb/Airbnb";
import Flights from "../Flights/Flights";
import { fetchFlightCardAsync } from "../Flights/flightsSlice";
import { useDispatch } from "react-redux";
const Quiz = () => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState();
  // const [children, setChildren] = useState(1);
  const [checkinCheckout, setCheckinCheckout] = useState({
    checkin: "",
    checkout: "",
  });
  const [adults, setAdults] = useState();
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
        case "setAdults":
          setAdults(value);
          break;
        case "price":
          setPrice(value);
          break;
        case "origin":
          setOrigin(value);
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
      questionText: "What days are you traveling?", //forflights
      inputType: "date",
      name: "date",
      value: dateReturnDate.date,
    },
    { inputType: "date", name: "returnDate", value: dateReturnDate.returnDate },
    {
      questionText: "Where will you be booking your stay?",
      inputType: "text",
      name: "destination",
      value: destination,
    },
    {
      questionText: "what days are you booking lodging?",
      inputType: "date",
      name: "checkin",
      value: checkinCheckout.checkin,
    },
    { inputType: "date", name: "checkout", value: checkinCheckout.checkout },
    {
      questionText: "How many adults are you traveling with?",
      inputType: "text",
      name: "adults",
      value: adults,
    },
    // {
    //   questionText: "How many children are you traveling with?",
    //   inputType: "text",
    //   name: "children",
    //   value: children,
    // },
  ];
  const handleNextQuestion = () => {
    if (currentQuestion < setOfQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  console.log("Origin:", origin);
  console.log("Destination:", destination);
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      fetchFlightCardAsync({
        origin: origin,
        destination: destination,
        date: dateReturnDate.date,
        returnDate: dateReturnDate.returnDate,
        adults: adults,
      })
    );
    setIsSubmitted(true);
  };
  return (
    <>
      {!isSubmitted && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
                <button onClick={handleSubmit} id="quizbtn" type="submit">
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
                // children={children}
                price={price}
              />
            </div>
            <div id="flightcard">
              <Flights
              // origin={origin}
              // destination={destination}
              // date={dateReturnDate.date}
              // returnDate={dateReturnDate.returnDate}
              // adults={adults}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Quiz;
