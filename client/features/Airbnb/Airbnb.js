import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";

const Airbnb = ({
  destination,
  checkin,
  checkout,
  adults,
  children,
  childAges,
}) => {
  const dispatch = useDispatch();
  const airbnb = useSelector((state) => state.airbnb);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(
      fetchAirbnbListings({
        location: destination,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        children: children,
        childAges: childAges,
      })
    );
  }, [dispatch, destination, checkin, checkout, adults, children, childAges]);

  const handleNextListing = () => {
    if (currentIndex < airbnb.results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="airbnbcard">
      {airbnb.results && airbnb.resdults.length > 0 && (
        <div>
          <h2>Airbnb</h2>
          <div className="lodgingcard" key={`results-${currentIndex}`}>
            <img
              src={airbnb.results[currentIndex].images[0]}
              alt="First Airbnb image"
              style={{ width: "300px", height: "225px" }}
            />
            <a
              href={airbnb.results[currentIndex].deeplink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{airbnb.results[currentIndex].name}</div>
            </a>
            <li>total price: ${listing.price.rate}</li>
            {currentIndex < airbnb.results.length - 1 && (
              <button type="button" onClick={handleNextListing}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Airbnb;
