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

//   const currentListing =  airbnb.results && airbnb.results.length > 0
//       ? airbnb.results[currentIndex]
//       : null

//   const handleNextListing = () => {
//     if (currentIndex < airbnb.results.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <div className="airbnbcard">
//       {airbnb.results && airbnb.results.length > 0 && (
//         <div>
//           <h2>Airbnb</h2>
//           <div className="lodgingcard" key={`results-${currentIndex}`}>
//             <img
//               src={currentListing.images[0]}
//               alt="First Airbnb image"
//               style={{ width: "300px", height: "225px" }}
//             />
//             <a
//               href={currentListing.deeplink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div>{currentListing.name}</div>
//             </a>
//             <li>total price: ${currentListing.price.rate}</li>
//             {currentIndex < airbnb.results.length - 1 && (
//               <button type="button" onClick={handleNextListing}>
//                 Next
//               </button>
//             )}
//             {currentIndex === currentListing.length -1 && (
//               <button type="submit">add to Bucketlist</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Airbnb;

//idea to render a airbnb at a time   //make a while loop, while (results)
// const current = results.shift()
//call our card component and pass the current
//cardcomponent(current)

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
  };

  return (
    <div className="airbnbComponent">
      <h2>Airbnb</h2>
      {airbnb.results && (
        <Slider {...settings}>
          {airbnb.results.map((result, index) => (
            <div key={`result-${index}`}>
              <div className="lodgingCards">
                {result.images && result.images.length > 0 && (
                  <img
                    src={result.images(0)}
                    alt="airbnbImages"
                    style={{ width: "300px", height: "225px" }}
                  />
                )}
                <a
                  href={result.deeplink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div>{result.name}</div>
                </a>
                <p>Total Price: ${result.price.rate} per night</p>{" "}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Airbnb;
