import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3500/api/v1/",
  timeout: 10000,
});

export default Axios;
