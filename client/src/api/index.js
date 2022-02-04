import axios from 'axios';

const API = axios.create({ baseURL: 'https://profs-to-pick.herokuapp.com' });

API.interceptors.request.use((req) => {
  req.withCredentials = true;
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// user login api methods
export const loginUser = (user) => API.post('/login', user);

// user api methods
export const getUserById = (id) => API.post('/user/getUserById', { id: id });
export const getUserByEmail = (email) =>
  API.post('/user/getUserByEmail', { email: email });

// professor api methods
export const addProf = (profData) => API.post('/professor/addProf', profData);
export const addProfsCsv = (profData) =>
  API.post('/professor/addProfsCsv', profData);
export const getAllProfs = () => API.get('/professor/getAllProfs');
export const getProf = (profID) => API.get(`/professor/${profID}`);

// rate api methods
export const findRating = (rating) => API.post('/rating/findRating', rating);
export const addRating = (rating) => API.post('/rating/addRating', rating);
export const getInstructorRatings = (rating) =>
  API.patch('/rating/getInstructorRatings', rating);
export const updateRating = (rating) =>
  API.patch(`rating/updateRating`, rating);

// review api methods
export const addReview = (review) => API.post('/review/addreview', review);
export const getReviews = (instructorID) =>
  API.post('/review/reviews', { instructorID: instructorID });
export const deleteReview = (reviewid) =>
  API.delete(`/review/deleteReview/${reviewid}`);

// admin api methods
export const getAdminList = () => API.get('/admin/adminlist');
export const postAddAdmin = (email) =>
  API.post('/admin/addadmin', { email: email });
export const postRemoveAdmin = (email) =>
  API.post('/admin/removeadmin', { email: email });
export const editProf = (prof) => API.patch(`/admin/editprof`, prof);
