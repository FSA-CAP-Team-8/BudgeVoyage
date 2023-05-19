import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYFLIGHTS } from "../../secrets";

export const fetchOriginCode = createAsyncThunk(
  "flights/fetchOriginCode",
  async ({ origin }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: (query = { origin }),
      headers: {
        "X-RapidAPI-Key": "856f1c46afmsh190815efb96a9b8p1f3487jsn758d06438f02",
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
    console.log("destination", destination);
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: { query: destination },
      headers: {
        "X-RapidAPI-Key": "856f1c46afmsh190815efb96a9b8p1f3487jsn758d06438f02",
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
  async ({ origin, destination, date, returnDate, adults }) => {
    const { data } = await fetchOriginCode({ origin });
    const { data: somethingElse } = await fetchDestinationCode({ destination });

    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
      params: {
        origin: data,
        destination: somethingElse,
        date: date,
        adults: adults,
        returnDate: returnDate,
      },
      headers: {
        "X-RapidAPI-Key": "856f1c46afmsh190815efb96a9b8p1f3487jsn758d06438f02",
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
      // timeout: 500,
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
