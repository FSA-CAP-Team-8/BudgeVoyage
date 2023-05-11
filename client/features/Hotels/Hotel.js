import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelID, fetchHotelPrices } from "./hotelIDSlice";

const Hotel = ({
  destination,
  checkin,
  checkout,
  adults,
  children,
  childAges,
}) => {
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
            childAges: childAges,
          })
        );
      });
    }
  }, [hotelID, dispatch, checkin, checkout, adults, childAges]);

  return (
    <div className="hotelComponent">
      <h2>Hotels</h2>
      {error && <p>Error: {error}</p>}
      {hotelID && (
        <div>
          {hotelID.map((result) => (
            <div key={result.dest_id}>
              <div>
                {result.prices && result.prices.results && (
                  <div>
                    {result.prices.results.map((priceResult) => (
                      <div key={priceResult.id}>
                        <div>
                          <img
                            src={priceResult.photoMainUrl}
                            alt="hotelImages"
                            style={{ width: "300px", height: "225px" }}
                          />
                          <div>{priceResult.name}</div>
                          <li>
                            Total Price: $
                            {priceResult.priceBreakdown.grossPrice.value.toFixed(
                              0
                            )}
                          </li>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotel;
