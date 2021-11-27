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
export const getAdminList = () => API.get('/admin/adminlist');
export const postAddAdmin = (email) => API.post('/admin/addadmin', {email: email});

