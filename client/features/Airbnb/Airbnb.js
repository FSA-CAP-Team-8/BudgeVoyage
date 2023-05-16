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
//             <img
//               src={airbnb.results[currentIndex].images[0]}
//               alt="First Airbnb image"
//               style={{ width: "300px", height: "225px" }}
//             />
//             <a
//               href={airbnb.results[currentIndex].deeplink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div>{airbnb.results[currentIndex].name}</div>
//             </a>
//             <li>total price: ${airbnb.results[currentIndex].price.total}</li>
//           </div>
//         ) : (
//           <div>No AirBnb results availble</div>
//         )}
//         <button type="button" onClick={handleNextListing}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Airbnb;

/* )}
            {currentIndex === airbnb.results.length -1 && (
              <button type="submit">add to Bucketlist</button>
            )}
          </div> */

/* )}
    </div> */

//idea to render a airbnb at a time   //make a while loop, while (results)
// const current = results.shift()
//call our card component and pass the current
//cardcomponent(current)

// import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAirbnbListings } from "./airSlice";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// const Airbnb = ({ destination, checkin, checkout, adults }) => {
//   const dispatch = useDispatch();
//   const airbnb = useSelector((state) => state.airbnb);

//   useEffect(() => {
//     dispatch(
//       fetchAirbnbListings({
//         destination: destination,
//         checkin: checkin,
//         checkout: checkout,
//         adults: adults,
//       })
//     );
//   }, [dispatch, destination, checkin, checkout, adults]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     centerMode: true,
//   };

//   return (
//     <div className="airbnbComponent">
//       <h2>Airbnb</h2>
//       {airbnb.results && (
//         <Slider {...settings}>
//           {airbnb.results.map((result, index) => (
//             <div key={`result-${index}`}>
//               <div className="lodgingCards">
//                 {result.images?.length > 0 && (
//                   <img
//                     src={result.images[0]}
//                     alt="airbnbImages"
//                     style={{ width: "300px", height: "225px" }}
//                   />
//                 )}
//                 <a
//                   href={result.deeplink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {" "}
//                   <div>{result.name}</div>
//                 </a>
//                 <p>Total Price: ${result.price.rate} per night</p>{" "}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };

// export default Airbnb;

//mapping that works

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
    <div className="airbnbComponent">
      <h2>Airbnb</h2>
      {airbnb.results && (
        <div>
          {airbnb.results.map((result, index) => (
            <div key={`result-${index}`}>
              <div className="lodgingCards">
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

//attemting rendering one at a time

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAirbnbListings } from "./airSlice";

// const Airbnb = ({
//   destination,
//   checkin,
//   checkout,
//   adults,
//   // children,
//   // childAges,
// }) => {
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
//         // children: children,
//         // childAges: childAges,
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
