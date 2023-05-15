import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEY } from "etc/secrets/secrets";

export const fetchFlightsListings = createAsyncThunk(
  "flights/fetch",
  async ({ origin, destination, date, adults, countryCode, market }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
      params: {
        origin: origin,
        destination: destination,
        date: date,
        adults: adults,
        countryCode: countryCode,
        market: market,
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEY,
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
