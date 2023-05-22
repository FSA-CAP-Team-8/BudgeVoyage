import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightCardAsync } from "./flightsSlice";

const Flights = ({ origin, destination, date, returnDate, adults }) => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  useEffect(() => {
    dispatch(
      fetchFlightCardAsync({
        origin: origin,
        destination: destination,
        date: date,
        returnDate: returnDate,
        adults: adults,
      })
    );
  }, [dispatch, origin, destination, date, returnDate, adults]);

  return (
    <>
      <div>
        <h2>Flights</h2>
        {/* {flights &&
          flights.length( */}
        <div>
          {flights.map((flight) => (
            <div key={flight.id}>
              <div>
                {flight.origin} &#8594; {flight.destination}
              </div>
              <div>{flight.price}</div>
              <img class="airline-logo" src={flight.image}></img>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Flights;
