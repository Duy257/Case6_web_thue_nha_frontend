import axios from "axios";

let token = JSON.parse(localStorage.getItem('accessToken'))
console.log("token", token)
export const axiosConfig = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + { token },
  },
});
