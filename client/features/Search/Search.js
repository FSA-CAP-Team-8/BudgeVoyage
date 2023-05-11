import React, { useState } from "react";
import Airbnb from "../Airbnb/Airbnb";
import Hotel from "../Hotels/Hotel";

const Search = () => {
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

  return (
    <div className="mainSearch">
      <h1 id="title">BudgeVoyage</h1>
      <div>Where would you like to go?</div>

      <form onSubmit={handleSubmit} className="mainForm">
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleInputChange}
        />

        <label htmlFor="checkin">Check-in:</label>
        <input
          type="date"
          id="checkin"
          value={checkin}
          onChange={handleCheckinChange}
        />

        <label htmlFor="checkout">Check-out:</label>
        <input
          type="date"
          id="checkout"
          value={checkout}
          onChange={handleCheckoutChange}
        />

        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={handleAdultsChange}
        />

        <label htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={handleChildrenChange}
        />

        {children > 0 && (
          <>
            {Array.from({ length: children }, (_, index) => (
              <div key={index}>
                <label htmlFor={`childAge${index}`}>
                  Child {index + 1} age:
                </label>
                <input
                  type="number"
                  id={`childAge${index}`}
                  value={childAges[index]}
                  onChange={(event) => handleChildAgeChange(index, event)}
                />
              </div>
            ))}
          </>
        )}

        <button type="submit">Search</button>
      </form>
      {isSubmitted && (
        <>
          <Hotel
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            adults={adults}
            children={children}
            childAges={childAges}
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
  );
};

export default Search;
