import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desolate-brushlands-20405.herokuapp.com/api/v1'
});

export default api;
