import axios from 'axios'

const API = axios.create({ baseUrl: 'http://localhost:5000'})

export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);