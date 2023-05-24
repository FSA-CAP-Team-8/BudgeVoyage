import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightsListings } from "./flightsSlice";
import React from "react";

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

  // const handleAddBucketList = (result) => {
  //   dispatch(handleAddBucketList(result));
  // };

  const [likes, setLikes] = useState([]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes.item[index] = !newLikes.item[index];
    setLikes(newLikes);
    if (newLikes.item[index]) {
      const likedItem = flights.data.item[index];
      bucketlist.addItem(likedItem); // Call the appropriate method in the BucketList component to append the liked item
    } else {
      const unlikedItem = flights.data.item[index];
      bucketlist.removeItem(unlikedItem);
    }
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
                  <button id="likes" onClick={() => handleLike(index)}>
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
                  <div>{item.legs[0].carriers[0].name}</div>
                  <img
                    className="flightfoto"
                    src="./photogrid/spirit.png"
                    alt="flightImages"
                    style={{ width: "300px", height: "225px" }}
                  ></img>
                  <div>Total Price: ${item.price.amount}</div>
                  <div>Arrival: {item.legs[0].arrival}</div>
                  <div id="departure">Departure: {item.legs[0].departure}</div>
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
