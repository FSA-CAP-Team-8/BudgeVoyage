import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import airbnbReducer from "../features/Airbnb/airSlice";
import hotelIDReducer from "../features/Hotels/hotelIDSlice";
import hotelPriceSlice from "../features/Hotels/hotelPriceSlice";

const store = configureStore({
  reducer: {
    airbnb: airbnbReducer,
    hotelID: hotelIDReducer,
    hotelPrice: hotelPriceSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
