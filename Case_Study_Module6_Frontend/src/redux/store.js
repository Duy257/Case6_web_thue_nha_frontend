import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./slide/authSlide";
import bookingSlide from "./slide/bookingSlide";
import houseSlide from "./slide/houseSlide";
import userSlide from "./slide/userSlide";

const store = configureStore({
  reducer: {
    house: houseSlide.reducer,
    booking: bookingSlide.reducer,
    auth: authSlide.reducer,
    user: userSlide.reducer,
  },
});
export default store;
