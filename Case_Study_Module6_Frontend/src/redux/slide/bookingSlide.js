import { createSlice } from "@reduxjs/toolkit";
import { bookingAction } from "../actionThunk/bookingActionThunk";

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
    booking: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookingAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.booking = action.payload;
    });
  },
});
export default bookingSlide;
