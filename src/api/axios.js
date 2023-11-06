import axios from 'axios';

// const accessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkzMDI5NTYsImV4cCI6MTY5OTMwNjU1NiwiYXVkIjoiMTEiLCJpc3MiOiJhZG9wZXQuY29tIn0.oNev9XigUPUacakukTVVu27TS-Ig_TrkJ9TDmMCnqgo';

const defaultURL = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Auth methods
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

// Pets methods
export async function fetchAllPets(accessToken) {
  try {
    const response = await defaultURL.get('/pets', {
      headers: { Authorization: `bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
