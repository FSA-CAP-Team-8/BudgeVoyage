import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEY } from "../../secrets";

export const fetchHotelPrice = createAsyncThunk(
  "hotel/fetchPrice",
  async ({ dest_id, checkin, checkout, adults, children }) => {
    console.log(dest_id);
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v2/hotels/search",
      params: {
        order_by: "popularity",
        adults_number: adults,
        checkin_date: checkin,
        filter_by_currency: "USD",
        dest_id: dest_id,
        locale: "en-us",
        checkout_date: checkout,
        units: "metric",
        room_number: "1",
        dest_type: "city",
        children_number: children,
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
      throw new Error("Failed to fetch hotel prices");
    }
  }
);

const hotelPriceSlice = createSlice({
  name: "hotelPrice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelPrice.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
    builder.addCase(fetchHotelPrice.rejected, (state, action) => {
      return state;
    });
  },
});

export default hotelPriceSlice.reducer;
