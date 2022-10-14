import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const getAllHouse = createAsyncThunk(
  "house/getAll",
  async () => {
    const { data } = await houseApi.getAll();
    return data;
  }
);
export const createHouse = createAsyncThunk(
  "house/create",
  async (house) => {
    const { data } = await houseApi.create(house);
    return data;
  }
);
export const getOne = createAsyncThunk(
  "house/create",
  async (id) => {
    const { data } = await houseApi.getOne(id);
    return data;
  }
);

export const setStatusHouseAction = createAsyncThunk(
    "auth/setStatus",
    async () => {}
);

export const getHistory = createAsyncThunk(
  "house/history",
  async () => {
      let token = localStorage.getItem("accessToken");
      const { data } = await houseApi.getHistory(token);
      localStorage.removeItem("accessToken");

      return data;
  }
);
