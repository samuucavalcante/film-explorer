import axios from 'axios';

const api = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=938c5de9&"
})

export default api;