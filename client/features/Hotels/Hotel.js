import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelID } from "./hotelIDSlice";

const Hotel = ({ destination }) => {
  const dispatch = useDispatch();
  const hotelID = useSelector((state) => state.hotelID);

  useEffect(() => {
    dispatch(
      fetchHotelID({
        destination: destination,
      })
    );
  }, [dispatch, destination]);

  return (
    <>
      <div>
        <h2>Hotels</h2>
        {hotelID && (
          <div>
            {hotelID.map((result) => (
              <div key={result.dest_id}>
                <div>
                  <div>Dest_ID: {result.dest_id}</div>{" "}
                  <div>City_name: {result.city_name}</div>{" "}
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
