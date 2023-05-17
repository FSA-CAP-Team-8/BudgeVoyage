import React from "react";

const Results = ({ data }) => {
  console.log("inresultsdata", data);
  return (
    <div className="airbnbComponent">
      <div className="lodgingCards">
        <img
          src={data.images[0]}
          alt="airbnbImages"
          style={{ width: "300px", height: "225px" }}
        />
        <a href={data.deeplink} target="_blank" rel="noopener noreferrer">
          {" "}
          <div>{data.name}</div>
        </a>
        <li>Total Price: ${data.price.total}</li>{" "}
      </div>
    </div>
  );
};
export default Results;
