import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelID, fetchHotelPrices } from "./hotelIDSlice";

const Hotel = ({ destination, checkin, checkout, adults, children }) => {
  const dispatch = useDispatch();
  const hotelID = useSelector((state) => state.hotelID.data);
  const error = useSelector((state) => state.hotelID.error);

  useEffect(() => {
    dispatch(
      fetchHotelID({
        destination: destination,
      })
    );
  }, [dispatch, destination]);

  useEffect(() => {
    if (hotelID) {
      hotelID.forEach((hotel) => {
        dispatch(
          fetchHotelPrices({
            dest_id: hotel.dest_id,
            checkin: checkin,
            checkout: checkout,
            adults: adults,
            children: children,
          })
        );
      });
    }
  }, [hotelID, dispatch, checkin, checkout, adults, children]);

  return (
    <>
      <div>
        <h2>Hotels</h2>
        {error && <p>Error: {error}</p>}
        {hotelID && (
          <div>
            {hotelID.map((result) => (
              <div key={result.dest_id}>
                <div>
                  <div>Dest_ID: {result.dest_id}</div>{" "}
                  <div>City_name: {result.city_name}</div>{" "}
                  <div>region: {result.region}</div>{" "}
                  <div>cc1: {result.cc1}</div>{" "}
                  {/* {result.prices && result.prices.results && (
                    <div>
                      {result.prices.results.map((priceResult) => (
                        <div key={priceResult.id}>
                          <div>Hotel Name: {priceResult.name}</div>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Hotel;
