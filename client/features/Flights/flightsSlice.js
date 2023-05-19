import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlightCardAsync = createAsyncThunk(
  "All flights",
  async () => {
    try {
      const { data } = await axios.get(`/api/flightcard`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
const flightSlice = createSlice({
  name: "flightcard",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlightCardAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectFlightSlice = (state) => {
  return state.flights;
};

export default flightSlice;
