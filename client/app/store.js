import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import airbnbReducer from "../features/Airbnb/airSlice";

const store = configureStore({
  reducer: {
    airbnb: airbnbReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
