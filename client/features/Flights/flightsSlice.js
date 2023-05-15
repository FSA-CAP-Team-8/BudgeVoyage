import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYFLIGHTS } from "../../secrets";

export const fetchAirportCode = createAsyncThunk(
  "flights/fetchAirportCode",
  async (origin) => {
    const options = {
      method: "GET",
      URL: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: { query: origin },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYFLIGHTS,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchFlightsListings = createAsyncThunk(
  "flights/fetch",
  async ({ origin, destination, date, adults, countryCode, market }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
      params: {
        origin: fetchAirportCode,
        origin: origin,
        destination: destination,
        date: date,
        adults: adults,
        countryCode: countryCode,
        market: market,
        currency: "USD",
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
