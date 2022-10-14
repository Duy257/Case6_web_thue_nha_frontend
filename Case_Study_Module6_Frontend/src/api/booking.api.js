import { axiosConfig } from "./axios";

const bookingApi = {
  booking(payload, token) {
    const url = `/booking`;
    return axiosConfig.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default bookingApi;
