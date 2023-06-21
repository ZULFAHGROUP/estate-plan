import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mapp-asset-tracker.azurewebsites.net", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLWFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsIl9pZCI6IjA4NTk1NDQ1LTkzY2YtNGYwYS1hYzI2LWMyZjM0ZjI5MDIwYyIsImlhdCI6MTY4NzM2NzQ4MiwiZXhwIjoxNjg3MzcxMDgyfQ.N-J9zPSrI8nAtHbCA9XrJsv90Ko17gdfuxiG3ZMfjdU"; // Replace with your actual token

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
