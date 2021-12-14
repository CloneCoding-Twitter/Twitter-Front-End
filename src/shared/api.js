import axios from "axios";

const api = axios.create({
  baseURL: "http://54.180.108.194",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`; // 요청할때마다 헤더에 쿠키에서 가져온 토큰을 실어서 보낸다.
//   return config;
// });

export default api