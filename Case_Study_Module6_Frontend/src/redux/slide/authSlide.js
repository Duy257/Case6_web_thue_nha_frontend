import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  registerAction, setStatusAuthAction,
} from "../actionThunk/authActionThunk";
import {loading, openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";
const authSlide = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    accessToken: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.status = "rejected";
    });
    //Login
    builder.addCase(loginAction.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(loginAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      localStorage.setItem("accessToken", action.payload.token);
    });
    builder.addCase(setStatusAuthAction.fulfilled, (state, action) => {
      state.status = "idle";
    });
  },
});
export default authSlide;
