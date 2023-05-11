import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";

const Airbnb = ({ destination, checkin, checkout, adults }) => {
  const dispatch = useDispatch();
  const airbnb = useSelector((state) => state.airbnb);

  useEffect(() => {
    dispatch(
      fetchAirbnbListings({
        destination: destination,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
      })
    );
  }, [dispatch, destination, checkin, checkout, adults]);

  return (
    <div className="airbnbComponent">
      <h2>Airbnb</h2>
      {airbnb.results && (
        <div>
          {airbnb.results.map((result, index) => (
            <div key={`result-${index}`}>
              <div className="lodgingCards">
                <img
                  src={result.images[0]}
                  alt="airbnbImages"
                  style={{ width: "300px", height: "225px" }}
                />
                <a
                  href={result.deeplink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div>{result.name}</div>
                </a>
                <li>Total Price: ${result.price.total}</li>{" "}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Airbnb;
