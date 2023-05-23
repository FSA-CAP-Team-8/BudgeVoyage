import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYAIR } from "../../secrets";

export const fetchAirbnbListings = createAsyncThunk(
  "airbnb/fetch",
  async ({ destination, checkin, checkout, adults, price }) => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: destination,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        price: price,
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYAIR,
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      console.log(data);
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Airbnb listings");
    }
  }
);

const airSlice = createSlice({
  name: "airbnb",
  initialState: { results: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirbnbListings.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAirbnbListings.rejected, (state, action) => {});
  },
});

export default airSlice.reducer;
