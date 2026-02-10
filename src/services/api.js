import axios from 'axios';

const api = axios.create({
  baseURL: 'https://laravel-cv-backend-production.up.railway.app/api', // your Laravel API URL
  headers: {
    Accept: 'application/json',
  },
});

export default api;
