import axios from "axios";

const url = "http://localhost:5000";

// comments requests
const fetchComments = () => axios.get(url);
const createComment = (comment) => axios.post(url, comment);

// auth requests
const auth = () => axios.get(`${url}/auth`, { withCredentials: true });
const signup = (user) =>
  axios.post(`${url}/auth/signup`, user, { withCredentials: true });
const login = (user) =>
  axios.post(`${url}/auth/login`, user, { withCredentials: true });
const logout = () => axios.get(`${url}/auth/logout`, { withCredentials: true });

export { fetchComments, createComment, auth, signup, login, logout };
