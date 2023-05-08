import React, { useState } from "react";
import Airbnb from "../Airbnb/Airbnb";

const Search = () => {
  const [city, setCity] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1 id="title">BudgeVoyage</h1>
      <div>Where would you like to go?</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
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

        <button type="submit">Search</button>
      </form>

      {isSubmitted && (
        <>
          <Airbnb
            city={city}
            checkin={checkin}
            checkout={checkout}
            adults={adults}
            children={children}
          />
        </>
      )}
    </div>
  );
};

export default Search;
