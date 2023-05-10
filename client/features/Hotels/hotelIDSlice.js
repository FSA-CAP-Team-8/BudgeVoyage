import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEY } from "../../secrets";

export const fetchHotelID = createAsyncThunk(
  "hotel/fetchID",
  async ({ destination }) => {
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      params: {
        name: destination,
        locale: "en-us",
      },
      headers: {
        "X-RapidAPI-Key": XRAPIDAPIKEY,
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Hotel ID");
    }
  }
);

const hotelIDSlice = createSlice({
  name: "hotelID",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelID.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchHotelID.rejected, (state, action) => {
      return state;
    });
  },
});

export default hotelIDSlice.reducer;
