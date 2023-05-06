import React, { useState } from "react";

import Airbnb from "../Airbnb/Airbnb";

const Search = () => {
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className="component search">
      <h1 id="title">BudgeVoyage</h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={city} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {isSubmitted && (
        <>
          <Airbnb city={city} />
        </>
      )}
    </div>
  );
};

export default Search;
