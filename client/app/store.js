import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import airbnbReducer from "../features/Airbnb/airSlice";
import hotelIDReducer from "../features/Hotels/hotelIDSlice";

const store = configureStore({
  reducer: {
    airbnb: airbnbReducer,
    hotelID: hotelIDReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
