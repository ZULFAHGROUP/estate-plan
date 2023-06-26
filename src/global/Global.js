import axios from "axios";

export const Global = {
  baseURL: "https://mapp-asset-tracker.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
};

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLWFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsIl9pZCI6ImRmZDY0NzNmLTM3YmEtNDI3Ni1hYTNjLTZiMDcwNzNkNDQ2NyIsImlhdCI6MTY4NzUxNjcwMSwiZXhwIjoxNjg3NTIwMzAxfQ.wyPG_vJYQExxTMPXtLIFJy7WfgC3zv_MLaQzwehRds0"; // Replace with your actual token

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
