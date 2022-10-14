import { createAsyncThunk } from "@reduxjs/toolkit";
import authapi from "../../api/auth.api";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (user) => {
    const { data } = await authapi.register(user);
    return data;
  }
);
export const loginAction = createAsyncThunk("auth/login", async (user) => {
  const { data } = await authapi.login(user);
  console.log(data, "data");
  return data;
});
export const setStatusAuthAction = createAsyncThunk(
  "auth/setStatus",
  async () => {}
);
