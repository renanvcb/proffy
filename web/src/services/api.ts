import axios from 'axios';

const api = axios.create({
  // Colocar IP do servidor
  baseURL: 'http://192.168.1.3:3333',
});

export default api;