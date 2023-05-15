import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightsListings } from "./flightsSlice";

const Flights = ({
  origin,
  destination,
  date,
  adults,
  countryCode,
  market,
}) => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(
      fetchFlightsListings({
        origin: origin,
        destination: destination,
        date: date,
        adults: adults,
        countryCode: countryCode,
        market: market,
      })
    );
  }, [dispatch, origin, destination, date, adults, countryCode, market]);

  console.log(flights.results);

  return (
    <>
      <div>
        <h2>Flights</h2>
        {flights.results && (
          <div>
            {flights.results.map((result, index) => (
              <div key={`result-${index}`}>
                <div>
                  <img
                    src={result.images[0]}
                    alt="First Flight image"
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
                  {/* <li>Bedrooms: {result.bedrooms}</li>{" "}
                  <li>Bathrooms: {result.bathrooms}</li>{" "}
                  <li>Rate: ${result.price.rate} nightly</li>{" "}
                  <li>Amenities: {result.previewAmenities.join(", ")}</li>{" "} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Flights;
