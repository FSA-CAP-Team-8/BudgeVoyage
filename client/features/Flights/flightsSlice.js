import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYFLIGHTS } from "../../secrets";

export const fetchOriginCode = createAsyncThunk(
  "flights/fetchOriginCode",
  async ({ origin }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: { query: origin },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYFLIGHTS,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchDestinationCode = createAsyncThunk(
  "flights/fetchDestinationCode",
  async ({ destination }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: { query: destination },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYFLIGHTS,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
    console.log("response", response);
  }
);

export const fetchFlightsListings = createAsyncThunk(
  "flights/fetch",
  async ({ origin, destination, date, returnDate, adults, price }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
      params: {
        origin: origin,
        destination: destination,
        date: date,
        adults: adults,
        returnDate: returnDate,
        price: price,
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYFLIGHTS,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };
    try {
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Flights listings");
    }
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlightsListings.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchFlightsListings.rejected, (state, action) => {
      return state;
    });
  },
});
export default flightsSlice.reducer;
