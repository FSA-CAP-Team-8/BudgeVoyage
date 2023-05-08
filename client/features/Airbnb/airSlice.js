import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEY } from "../../secrets";

export const fetchAirbnbListings = createAsyncThunk(
  "airbnb/fetch",
  async ({ city, checkin, checkout, adults, children }) => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: city,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        children: children,
        page: "1",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEY,
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Airbnb listings");
    }
  }
);

const airSlice = createSlice({
  name: "airbnb",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirbnbListings.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAirbnbListings.rejected, (state, action) => {
      return state;
    });
  },
});

export default airSlice.reducer;
