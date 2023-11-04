import axios from 'axios';

const defaultURL = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export async function postUser(userData) {
  try {
    const response = await defaultURL.post('/register', userData);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function login(loginData) {
  try {
    const response = await defaultURL.post('/login', loginData);
    return response;
  } catch (error) {
    console.error(error);
  }
}
