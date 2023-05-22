import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightsListings } from "./flightsSlice";

const Flights = ({ origin, destination, date, returnDate, adults, price }) => {
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
        price: price,
      })
    );
  }, [dispatch, origin, destination, date, returnDate, adults, price]);

  const handleAddBucketList = (result) => {
    dispatch(handleAddBucketList(result));
  };

  return (
    <div id="flightcard">
      <div className="flightComponent">
        <h2>Flights</h2>
        {flights.data && (
          <div>
            {flights.data.slice(0, 20).map((item, index) => (
              <div key={`result-${index}`}>
                <div className="flighCards">
                  <div>{item.legs[0].carriers[0].name}</div>
                  <img
                    className="flightfoto"
                    src="./photogrid/flightfoto.png"
                    alt="flightImages"
                    style={{ width: "300px", height: "225px" }}
                  ></img>
                  <div>Total Price: ${item.price.amount}</div>
                  <div>Arrival: {item.legs[0].arrival}</div>
                  <div id="departure">Departure: {item.legs[0].departure}</div>
                  <button
                    id="bktbtn"
                    type="button"
                    onClick={handleAddBucketList}
                  >
                    add to BucketList
                  </button>
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
