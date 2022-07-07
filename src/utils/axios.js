import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.covalenthq.com/v1/1/",
  /* timeout: 1000, */
  headers: { "Content-Type": "application/json" },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.resolve(error)
);

AxiosInstance.interceptors.response.use(
  (resp) => Promise.resolve(resp.data),
  //
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default (props) => {
  const { url, method = "GET", ...rest } = props;
  const result = AxiosInstance({
    url,
    method,
    ...rest,
  });
  return result;
};
