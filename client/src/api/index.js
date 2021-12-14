import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  req.withCredentials = true;
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// user login api methods
export const loginUser = (user) => API.post('/login', user);

// professor api methods
export const addProf = (profData) => API.post('/professor/addProf', profData);
export const addProfsCsv = (profData) =>
  API.post('/professor/addProfsCsv', profData);
export const getAllProfs = () => API.get('/professor/getAllProfs');
export const getAdminList = () => API.get('/admin/adminlist');
export const postAddAdmin = (email) =>
  API.post('/admin/addadmin', { email: email });

// rate api methods
export const findRating = (rating) => API.post('/rating/findRating', rating);
export const addRating = (rating) => API.post('/rating/addRating', rating);
export const getInstructorRatings = (rating) =>
  API.patch('/rating/getInstructorRatings', rating);
export const updateRating = (rating) =>
  API.patch(`rating/updateRating`, rating);
