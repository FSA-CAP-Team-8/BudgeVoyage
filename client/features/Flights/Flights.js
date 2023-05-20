import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightsListings } from "./flightsSlice";

const Flights = ({
  origin,
  destination,
  date,
  returnDate,
  adults, // countryCode,
}) => {
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
        // countryCode: countryCode,
      })
    );
  }, [dispatch, origin, destination, date, returnDate, adults]);

  return (
    <>
      <div>
        <h2>Flights</h2>
        {flights.results && (
          <div>
            {flights.results.map((result, index) => (
              <div key={`result-${index}`}>
                <div>{result.name}</div>
                <div>{result.amount}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Flights;
