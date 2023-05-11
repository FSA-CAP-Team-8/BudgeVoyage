import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";

const Airbnb = ({ destination, checkin, checkout, adults }) => {
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
  }, [dispatch, destination, checkin, checkout, adults]);

  return (
    <div className="component">
      <h2>Airbnb</h2>
      {airbnb.results && (
        <div className="apiResults">
          {airbnb.results.map((result, index) => (
            <div key={`result-${index}`}>
              <div className="resultsCards">
                <img
                  src={result.images[0]}
                  alt="airbnbImages"
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
                <li>Type: {result.type}</li>{" "}
                <li>Total Price: ${result.price.total}</li>{" "}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Airbnb;

/** The Following Data is Dummy Data */

// import React from "react";

// const Airbnb = () => {
//   const dummyData = [
//     {
//       name: "Airbnb Listing A",
//       images: ["https://example.com/airbnb-a.jpg"],
//       deeplink: "https://example.com/airbnb-a",
//       type: "Entire Home",
//       price: {
//         total: 200,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//     {
//       name: "Airbnb Listing B",
//       images: ["https://example.com/airbnb-b.jpg"],
//       deeplink: "https://example.com/airbnb-b",
//       type: "Private Room",
//       price: {
//         total: 100,
//       },
//     },
//   ];

//   return (
//     <div className="component">
//       <h2>Airbnb</h2>
//       <div className="apiResults">
//         {dummyData.map((result, index) => (
//           <div key={`result-${index}`}>
//             <div className="resultsCards">
//               <img
//                 src={result.images[0]}
//                 alt="airbnbImages"
//                 style={{ width: "300px", height: "225px" }}
//               />
//               <a
//                 href={result.deeplink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {" "}
//                 <div>{result.name}</div>
//               </a>
//               <li>Type: {result.type}</li>{" "}
//               <li>Total Price: ${result.price.total}</li>{" "}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Airbnb;
