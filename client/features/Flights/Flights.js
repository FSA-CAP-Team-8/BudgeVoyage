import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlightCardAsync } from "./flightsSlice";

const Flights = ({ origin, destination, date, returnDate, adults }) => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  useEffect(() => {
    dispatch(
      fetchFlightCardAsync({
        origin: origin,
        destination: destination,
        date: date,
        returnDate: returnDate,
        adults: adults,
      })
    );
  }, [dispatch, origin, destination, date, returnDate, adults]);

  return (
    <>
      <div>
        <h2>Flights</h2>
        {/* {flights &&
          flights.length( */}
        <div>
          {flights.map((flight) => (
            <div key={flight.id}>
              <div>{flight.name}</div>
              <div>{flight.price}</div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Flights;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAirbnbListings } from "./airSlice";
// const Airbnb = ({ destination, checkin, checkout, adults }) => {
//   const dispatch = useDispatch();
//   const airbnb = useSelector((state) => state.airbnb);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     dispatch(
//       fetchAirbnbListings({
//         location: destination,
//         checkin: checkin,
//         checkout: checkout,
//         adults: adults,
//       })
//     );
//   }, [dispatch, destination, checkin, checkout, adults]);
//   const handleNextListing = () => {
//     const nextIndex = (currentIndex + 1) % airbnb.results.length;
//     setCurrentIndex(nextIndex);
//   };
//   return (
//     <div className="airbnbcard">
//       <div>
//         <h2>Airbnb</h2>
//         {airbnb.results && airbnb.results.length > 0 ? (
//           <div className="lodgingcard">
//             {airbnb.results[currentIndex]?.image &&
//             airbnb.results[currentIndex]?.image.length > 0 ? (
//               <img
//                 src={airbnb.results[currentIndex]?.image[0]}
//                 alt="First Airbnb image"
//                 style={{ width: "300px", height: "225px" }}
//               />
//             ) : (
//               <div>No images available</div>
//             )}
//             <a
//               href={airbnb.results[currentIndex]?.deeplink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div>{airbnb.results[currentIndex]?.name}</div>
//             </a>
//             <li>total price: ${airbnb.results[currentIndex]?.price.total}</li>
//           </div>
//         ) : (
//           <div>No Airbnb results available</div>
//         )}
//         <button type="button" onClick={handleNextListing}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Airbnb;
