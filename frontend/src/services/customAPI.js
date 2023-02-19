import axios from "axios";

const customAPI = axios.create({
  baseURL: "http://localhost:3500/api/v1/",
  timeout: 10000,
});

customAPI.interceptors.request.use(
  (req) => {
    // adding the token
    const token = localStorage.getItem("token");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }

    return req;
  },
  (err) => err
);
customAPI.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      logout();
    }
    return Promise.reject(err);
  }
);

async function customFetch(method, url, options = {}) {
  try {
    const response = await customAPI[method.toLowerCase()](url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function logout() {
  localStorage.removeItem("accessToken");
  window.location.reload();
}

export const getAll = () => customFetch("get", "/");
export const getOne = (id) => customFetch("get", `/${id}`);
export const createOne = (user) => customFetch("post", "/", user);
export const updateOne = (id, newData) =>
  customFetch("patch", `/${id}`, { ...newData });
export const deleteOne = (id) => customFetch("delete", `/${id}`);

export default customAPI;
