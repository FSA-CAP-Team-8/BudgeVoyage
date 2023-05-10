import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelID } from "./hotelIDSlice";
import { fetchHotelPrice } from "./hotelPriceSlice";

const Hotel = ({ destination, checkin, checkout, adults, children }) => {
  const dispatch = useDispatch();
  const hotelID = useSelector((state) => state.hotelID);
  const hotelPrice = useSelector((state) => state.hotelPrice);

  useEffect(() => {
    dispatch(fetchHotelID({ destination }));
  }, [dispatch, destination]);

  useEffect(() => {
    dispatch(
      fetchHotelPrice({
        dest_id: hotelID.results[0].dest_id,
        checkin_date: checkin,
        checkout_date: checkout,
        adults: adults,
        children: children,
      })
    );
  }, [dispatch, hotelID, checkin, checkout, adults, children]);

  return (
    <div>
      <h2>Hotels</h2>
      {hotelPrice.results ? (
        <div>
          {hotelPrice.results.map((result) => (
            <div key={result.id}>
              <div>
                <div>Name: {result.name}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Hotel;
