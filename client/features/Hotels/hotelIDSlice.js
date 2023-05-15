import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { XRAPIDAPIKEY } from "etc/secrets/secrets";

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
      const filteredData = data.filter(
        (item) => item.cc1 && item.cc1.toLowerCase() === "us"
      );
      return filteredData;
    } catch (err) {
      throw new Error("Failed to fetch Hotel ID");
    }
  }
);

export const fetchHotelPrices = createAsyncThunk(
  "hotel/fetchPrices",
  async ({ dest_id, checkin, checkout, adults }) => {
    const params = {
      order_by: "popularity",
      adults_number: adults,
      checkin_date: checkin,
      filter_by_currency: "USD",
      dest_id: dest_id,
      locale: "en-us",
      checkout_date: checkout,
      units: "imperial",
      room_number: "1",
      dest_type: "city",
    };

    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v2/hotels/search",
      params,
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

const hotelIDSlice = createSlice({
  name: "hotelID",
  initialState: { data: [], error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelID.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchHotelID.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(fetchHotelPrices.fulfilled, (state, action) => {
      const hotel = state.data.find(
        (hotel) => hotel.dest_id === action.meta.arg.dest_id
      );
      if (hotel) {
        hotel.prices = action.payload;
      }
    });
  },
});

export default hotelIDSlice.reducer;
