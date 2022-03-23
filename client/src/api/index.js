import axios from "axios";

const url = "http://localhost:5000";

const fetchComments = () => axios.get(url);
const createComment = (comment) => axios.post(url, comment);

export { fetchComments, createComment };
