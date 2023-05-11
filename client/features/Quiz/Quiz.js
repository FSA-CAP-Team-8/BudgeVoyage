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

  // const setOfQuestions = [
  //   {
  //     question1: "What is your budget?",
  //     answerOption: { answertest: "New York" },
  //   },
  //   {
  //     questionText: "Where are you traveling from and to ?",
  //     answerOption: { answertest: "New York" },
  //   },
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
  // ];

  const id = destination;

  return (
    <div id="quiz">
      <div id="desination">
        <label htmlFor="destination">Where would you like to go?</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleInputChange}
        />
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>

      <div id="welcomediv">
        {
          (id = destination ? (
            ((<label htmlFor="destination">Destination:</label>),
            (
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleInputChange}
              />
            ))
          ) : (
            <h2>Glad you're here. Checkout our blends...</h2>
          ))
        }
      </div>
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

    //   {/* <div className="container">
    //     <h1>{setOfQuestions[0]}</h1>
    //     <h1>{setOfQuestions[1]}</h1>
    //     {/* <h1>{setOfQuestions[2]}</h1>
    //     <h1>{setOfQuestions[3]}</h1>
    //     <h1>{setOfQuestions[4]}</h1>
    //     <h1>{setOfQuestions[5]}</h1> */}
    //   {/* <div>
    //       <div id="submitbtn">
    //         {!setOfQuestions[5] ? (
    //           <button id="nextbtn" onClick={() => handleSubmit(quiz)}>
    //             next
    //           </button>
    //         ) : (
    //           <button id="quizbtn" onClick={() => handleSubmit(quiz)}>
    //             Ready for Your Voyage
    //           </button>
    //         )}
    //       </div>
    //     </div> */}
    // // </div>
    // // </div> */}
  );
};

export default Quiz;

// import React, { useState } from "react";
// import Airbnb from "../Airbnb/Airbnb";
// import Hotel from "../Hotels/Hotel";

// const Search = () => {
//   const [destination, setDestination] = useState("");
//   const [checkin, setCheckin] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [childAges, setChildAges] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (event) => {
//     setDestination(event.target.value);
//   };

//   const handleCheckinChange = (event) => {
//     setCheckin(event.target.value);
//   };

//   const handleCheckoutChange = (event) => {
//     setCheckout(event.target.value);
//   };

//   const handleAdultsChange = (event) => {
//     setAdults(event.target.value);
//   };

//   const handleChildrenChange = (event) => {
//     setChildren(event.target.value);
//   };

//   const handleChildAgeChange = (index, event) => {
//     const newChildAges = [...childAges];
//     newChildAges[index] = event.target.value;
//     setChildAges(newChildAges);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   };

//   return (
//     <div>
//       <h1 id="title">BudgeVoyage</h1>
//       <div>Where would you like to go?</div>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="destination">Destination:</label>
//         <input
//           type="text"
//           id="destination"
//           value={destination}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="checkin">Check-in:</label>
//         <input
//           type="date"
//           id="checkin"
//           value={checkin}
//           onChange={handleCheckinChange}
//         />

//         <label htmlFor="checkout">Check-out:</label>
//         <input
//           type="date"
//           id="checkout"
//           value={checkout}
//           onChange={handleCheckoutChange}
//         />

//         <label htmlFor="adults">Adults:</label>
//         <input
//           type="number"
//           id="adults"
//           value={adults}
//           onChange={handleAdultsChange}
//         />

//         <label htmlFor="children">Children:</label>
//         <input
//           type="number"
//           id="children"
//           value={children}
//           onChange={handleChildrenChange}
//         />

//         {children > 0 && (
//           <>
//             {Array.from({ length: children }, (_, index) => (
//               <div key={index}>
//                 <label htmlFor={`childAge${index}`}>
//                   Child {index + 1} age:
//                 </label>
//                 <input
//                   type="number"
//                   id={`childAge${index}`}
//                   value={childAges[index]}
//                   onChange={(event) => handleChildAgeChange(index, event)}
//                 />
//               </div>
//             ))}
//           </>
//         )}

//         <button type="submit">Search</button>
//       </form>
//       {isSubmitted && (
//         <>
//           <Hotel
//             destination={destination}
//             checkin={checkin}
//             checkout={checkout}
//             adults={adults}
//             children={children}
//             childAges={childAges}
//           />
//           <Airbnb
//             destination={destination}
//             checkin={checkin}
//             checkout={checkout}
//             adults={adults}
//             children={children}
//             childAges={childAges}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Search;
