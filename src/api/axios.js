import axios from 'axios';
// const BASE_URL = 'http://localhost:3000/api';
const BASE_URL = 'https://api-adopet.gilbertosilva.dev/api';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
