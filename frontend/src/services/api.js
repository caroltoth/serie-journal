import axios from 'axios';

const api = axios.create({
  baseURL: 'https://serie-journal.onrender.com', 
});

export default api;