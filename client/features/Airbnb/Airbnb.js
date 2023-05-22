//mapping that works
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";
import bucketlist from "../Bucketlist/BucketList";

const Airbnb = ({ destination, checkin, checkout, adults, price }) => {
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
  }, [dispatch, destination, checkin, checkout, adults, price]);

  const [likes, setLikes] = useState([]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
    if (newLikes[index]) {
      const likedItem = airbnb.results[index];
      bucketlist.addItem(likedItem); // Call the appropriate method in the BucketList component to append the liked item
    } else {
      const unlikedItem = airbnb.results[index];
      bucketlist.removeItem(unlikedItem);
    }
  };

  return (
    <div className="airbnbComponent">
      <h2>Airbnb</h2>
      {airbnb.results && (
        <div>
          {airbnb.results.map((result, index) => (
            <div key={`result-${index}`}>
              <div className="lodgingCards">
                <img
                  className="airbnbfoto"
                  src={result.images[0]}
                  alt="airbnbImages"
                  style={{ width: "300px", height: "225px" }}
                />
                <a
                  href={result.deeplink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{result.name}</div>
                </a>
                <p>Total Price: ${result.price.total}</p>
                <button onClick={() => handleLike(index)}>
                  {likes[index] ? (
                    <img
                      src="heart(1).png"
                      alt="Liked"
                      width="20px"
                      height="20px"
                    />
                  ) : (
                    <img
                      src="heart.png"
                      alt="Unlike"
                      width="16px"
                      height="16px"
                    />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Airbnb;
