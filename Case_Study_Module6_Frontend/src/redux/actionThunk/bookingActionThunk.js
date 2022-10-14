import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingApi from "../../api/booking.api";

export const bookingAction = createAsyncThunk(
  "booking/create",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    const { data } = await bookingApi.booking(payload, token);
    return data;
  }
);
