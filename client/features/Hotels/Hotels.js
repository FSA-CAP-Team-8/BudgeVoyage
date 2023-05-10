import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelsListings } from "./hotelsSlice";

const Hotels = ({
  entityId,
  checkin,
  checkout,
  waitTime,
  countryCode,
  market,
}) => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(
      fetchHotelsListings({
        entityId: entityId,
        checkin: checkin,
        checkout: checkout,
        waitTime: waitTime,
        countryCode: countryCode,
        market: market,
      })
    );
  }, [dispatch, entityId, checkin, checkout, waitTime, countryCode, market]);

  return (
    <>
      <div>
        <h2>Hotels</h2>
        {hotels.results && (
          <div>
            {hotels.results.map((result, index) => (
              <div key={`result-${index}`}>
                <div>
                  <img
                    src={result.images[0]}
                    alt="First Hotel image"
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
                  <li>Bedrooms: {result.bedrooms}</li>{" "}
                  <li>Bathrooms: {result.bathrooms}</li>{" "}
                  <li>Rate: ${result.price.rate} nightly</li>{" "}
                  <li>Amenities: {result.previewAmenities.join(", ")}</li>{" "}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;
