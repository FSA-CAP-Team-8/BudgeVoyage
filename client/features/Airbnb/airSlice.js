import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYAIR } from "../../secrets";

export const fetchAirbnbListings = createAsyncThunk(
  "airbnb/fetch",
  async ({ destination, checkin, checkout, adults }) => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: destination,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        // page: "1",
        // currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "cbceaa818fmsh07841f07daa59a3p1d8481jsn01cbd0fe6103",
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
  // { result: null, currentIndex: 0 }
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirbnbListings.fulfilled, (state, action) => {
      // return { ...state, result: action.payload };
      return action.payload;
    });
    builder.addCase(fetchAirbnbListings.rejected, (state, action) => {
      return state;
      // return { ...state, result: null };
    });
  },
});

export default airSlice.reducer;
