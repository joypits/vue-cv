import axios from 'axios';

const api = axios.create({
  baseURL: 'https://laravel-cv-backend-production.up.railway.app/api',//'http://127.0.0.1:8000/api', // your Laravel API URL
  headers: {
    Accept: 'application/json',
  },
});

export default api;
