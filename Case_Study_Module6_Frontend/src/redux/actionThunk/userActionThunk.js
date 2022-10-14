import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/user.api";
import authapi from "../../api/auth.api";

export const getUserById = createAsyncThunk("user/getUserById", async () => {
  let token = localStorage.getItem("accessToken");
  const { data } = await userApi.getUserById(token);
  return data;
});

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async (payload) => {
    const { data } = await userApi.update(payload.id, payload.user);
    return data;
  }
);

export const loginAction = createAsyncThunk("auth/login", async (user) => {
    const { data } = await authapi.login(user);
    console.log(data, "data");
    return data;
});

export const changePasswordAction = createAsyncThunk(
  "user/changePassword",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    const { data } = await userApi.changePassword(payload, token);
    return data;
  }
);
export const loginGoogleAction = createAsyncThunk(
  "user/loginGoogle",
  async (user) => {
      console.log("thunk",user)
    // let token = localStorage.getItem("accessToken");
    const { data } = await userApi.loginGoogle(user);
      console.log(data)
    return data;
  }
);

export const setStatusUserAction = createAsyncThunk(
    "auth/setStatus",
    async () => {}
);
