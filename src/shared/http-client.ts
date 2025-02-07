import axios from "axios";

const httpClient = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL
  baseURL : "https://api.testaminofen.com/"
})

httpClient.interceptors.request.use((config) => {
  if (localStorage.getItem("accessToken"))
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  return config;
});

httpClient.interceptors.response.use(
  (val) => val,
  async (error) => {
    console.log("error interceptor", error.response);
    if (error.response?.status === 401) {
      try {
        console.log("in 401");

        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.post(
          "https://api.testaminofen.com/user/refresh/",
          {
            refresh: refreshToken,
          }         
        );
        localStorage.setItem("accessToken", response.data.access_token);
        
        return httpClient(error.config ?? {});
      } catch (e) {
        return Promise.reject(error);
      }
    } else return Promise.reject(error);
  }
);

export {
  httpClient
}