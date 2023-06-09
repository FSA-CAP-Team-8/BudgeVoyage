import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import airbnbReducer from "../features/Airbnb/airSlice";
import hotelIDReducer from "../features/Hotels/hotelIDSlice";
import authReducer from "../features/Authform/authSlice";
import flightsReducer from "../features/Flights/flightsSlice";

const store = configureStore({
  reducer: {
    airbnb: airbnbReducer,
    hotelID: hotelIDReducer,
    auth: authReducer,
    flights: flightsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/Authform/authSlice";
