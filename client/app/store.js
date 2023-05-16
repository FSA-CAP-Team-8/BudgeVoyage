import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import airbnbReducer from "../features/Airbnb/airSlice";
import hotelIDReducer from "../features/Hotels/hotelIDSlice";
import flightsReducer from "../features/Flights/flightsSlice";

const store = configureStore({
  reducer: {
    airbnb: airbnbReducer,
    hotelID: hotelIDReducer,
    flights: flightsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
