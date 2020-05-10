import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

export const getJokes = url => http.get(url);
export const getCategories = () => http.get('/categories');
