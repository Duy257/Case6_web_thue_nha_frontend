import { axiosConfig } from "./axios";

const userApi = {
  getUserById(token) {
    const url = `/auth/profile`;
    return axiosConfig.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, user) {
    const url = `/auth/updateProfile/${id}`;
    return axiosConfig.put(url, user);
  },
  changePassword(payload, token) {
    const url = `/auth/changePassword`;
    return axiosConfig.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  login(user) {
    const url = `/auth/login`;
    return axiosConfig.post(url, user);
  },
  loginGoogle(user) {
    const url = `/auth/loginGoogle`;
    return axiosConfig.post(url, user);
  },

};
export default userApi;
