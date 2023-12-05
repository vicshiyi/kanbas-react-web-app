import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

// const API_BASE = process.env.REACT_APP_API_BASE_URL;
const API_BASE = "https://kanbas-node-server-app-project.onrender.com";
console.log(API_BASE);
export const USERS_API = `${API_BASE}/api/users`;
// const USERS_API = `http://localhost:4000/api/users`;

export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await request.put(`${USERS_API}/${id}`, user);
  return response.data;
};

// export const updateUser1 = async (user) => {
//   const response = await axios.put(`${USERS_API}/${user._id}`, user);
//   return response.data;
// };


export const deleteUser = async (id) => {
  const response = await request.delete(`${USERS_API}/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}/create`, user);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};


