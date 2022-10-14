import { axiosConfig } from "./axios";

const authapi = {
  register(user) {
    const url = `/auth/register`;
    return axiosConfig.post(url, user);
  },
  login(user) {
    const url = `/auth/login`;
    return axiosConfig.post(url, user);
  },
};
export default authapi;
