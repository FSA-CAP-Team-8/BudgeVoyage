import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEYHOTELS } from "../../secrets";

export const fetchHotelsListings = createAsyncThunk(
  "hotels/fetch",
  async ({ entityId, checkin, checkout, waitTime, countryCode, market }) => {
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchHotel",
      params: {
        entityId: entityId,
        checkin: checkin,
        checkout: checkout,
        waitTime: waitTime,
        countryCode: countryCode,
        market: market,
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEYHOTELS,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Hotels listings");
    }
  }
);

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelsListings.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchHotelsListings.rejected, (state, action) => {
      return state;
    });
  },
});

export default hotelsSlice.reducer;
