/* eslint-disable no-useless-catch */
import axios from 'axios';

/* Base URL from environment variable */
const API_URL = 'http://localhost:3333/api';

/* Create an axios instance with default configurations */
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Allow-Control-Allow-Origin': window.location.origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  },
});

/* Add a request interceptor for authentication or other headers */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* Add a response interceptor for error handling */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401) {
        console.error('Unauthorized, redirecting to login...');
      } else if (status === 404) {
        console.error('Resource not found');
      } else {
        console.error('Server error:', data.message || 'Unknown error');
      }
    } else if (error.request) {
      console.error('No response from server. Check your network.');
    } else {
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

/* API Methods */
export const $get = async (endpoint: string, params = {}) => {
  try {
    const response = await api.get(endpoint, { params }); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const $post = async (endpoint: string, payload = {}) => {
  try {
    const response = await api.post(endpoint, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const $put = async (endpoint: string, payload = {}) => {
  try {
    const response = await api.put(endpoint, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const $patch = async (endpoint: string, payload = {}) => {
  try {
    const response = await api.patch(endpoint, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const $delete = async (endpoint: string) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;