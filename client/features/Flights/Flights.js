import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightsListings } from "./flightsSlice";

const Flights = ({ origin, destination, date, returnDate, adults }) => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(
      fetchFlightsListings({
        origin: origin,
        destination: destination,
        date: date,
        returnDate: returnDate,
        adults: adults,
      })
    );
  }, [dispatch, origin, destination, date, returnDate, adults]);

  return (
    <div id="flightcard">
      <div className="flightComponent">
        <h2>Flights</h2>
        {flights.data && (
          <div>
            {flights.data.map((item, index) => (
              <div key={`result-${index}`}>
                <div className="flighCards">
                  <div>Carrier Name: {item.legs[0].carriers[0].name}</div>
                  <div>Price: {item.price.amount}</div>
                  <div>Arrival: {item.legs[0].arrival}</div>
                  <div>Departure: {item.legs[0].departure}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;

// const data = payload.data;

// data.map((item, index) => {
//   // Access the properties of each item and perform your desired operations
//   const id = item.id;
//   const ecoContenderDelta = item.eco_contender_delta;
//   const legs = item.legs;

//   // ... do something with the data

//   // Remember to return a value if you want to create a new array based on the mapping
//   return (
//     // JSX or any other output you desire
//     <div key={index}>
//       <p>ID: {id}</p>
//       <p>Eco Contender Delta: {ecoContenderDelta}</p>
//       {/* Render other properties as needed */}
//     </div>
//   );
// });
