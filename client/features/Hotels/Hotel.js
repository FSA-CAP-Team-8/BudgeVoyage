// import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchHotelID, fetchHotelPrices } from "./hotelIDSlice";

// const Hotel = ({
//   destination,
//   checkin,
//   checkout,
//   adults,
//   children,
//   childAges,
// }) => {
//   const dispatch = useDispatch();
//   const hotelID = useSelector((state) => state.hotelID.data);
//   const error = useSelector((state) => state.hotelID.error);

//   useEffect(() => {
//     dispatch(
//       fetchHotelID({
//         destination: destination,
//       })
//     );
//   }, [dispatch, destination]);

//   useEffect(() => {
//     if (hotelID) {
//       hotelID.forEach((hotel) => {
//         dispatch(
//           fetchHotelPrices({
//             dest_id: hotel.dest_id,
//             checkin: checkin,
//             checkout: checkout,
//             adults: adults,
//             children: children,
//             childAges: childAges,
//           })
//         );
//       });
//     }
//   }, [hotelID, dispatch, checkin, checkout, adults, childAges]);

//   return (
//     <div className="component">
//       <h2>Hotels</h2>
//       {error && <p>Error: {error}</p>}
//       {hotelID && (
//         <div className="apiResults">
//           {hotelID.map((result) => (
//             <div key={result.dest_id}>
//               <div>
//                 {result.prices && result.prices.results && (
//                   <div>
//                     {result.prices.results.map((priceResult) => (
//                       <div key={priceResult.id}>
//                         <div className="resultsCards">
//                           <img
//                             src={priceResult.photoMainUrl}
//                             alt="hotelImages"
//                             style={{ width: "300px", height: "225px" }}
//                           />
//                           <li>Hotel Name: {priceResult.name}</li>
//                           <li>
//                             Total Price: $
//                             {priceResult.priceBreakdown.grossPrice.value}
//                           </li>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hotel;

/** The following is dummy data */

import React from "react";

const Hotel = () => {
  const dummyData = [
    {
      dest_id: 1,
      prices: {
        results: [
          {
            id: 1,
            name: "Hotel A",
            photoMainUrl: "https://example.com/hotel-a.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 100,
                currency: "USD",
              },
            },
          },
          {
            id: 2,
            name: "Hotel B",
            photoMainUrl: "https://example.com/hotel-b.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 150,
                currency: "USD",
              },
            },
          },
        ],
      },
    },
    {
      dest_id: 2,
      prices: {
        results: [
          {
            id: 3,
            name: "Hotel C",
            photoMainUrl: "https://example.com/hotel-c.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 120,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
          {
            id: 4,
            name: "Hotel D",
            photoMainUrl: "https://example.com/hotel-d.jpg",
            priceBreakdown: {
              grossPrice: {
                value: 200,
                currency: "USD",
              },
            },
          },
        ],
      },
    },
  ];

  return (
    <div className="component">
      <h2>Hotels</h2>
      <div className="apiResults">
        {dummyData.map((result) => (
          <div key={result.dest_id}>
            {result.prices && result.prices.results && (
              <div>
                {result.prices.results.map((priceResult) => (
                  <div key={priceResult.id}>
                    <div className="resultsCards">
                      <img
                        src={priceResult.photoMainUrl}
                        alt="hotelImages"
                        style={{ width: "300px", height: "225px" }}
                      />
                      <li>Hotel Name: {priceResult.name}</li>
                      <li>
                        Total Price: $
                        {priceResult.priceBreakdown.grossPrice.value}
                      </li>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
