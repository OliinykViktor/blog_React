import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts?_limit=10`)
};

export const fetchComments = postId => {
  return axios.get(`${BASE_URL}/posts/${postId}/comments`);
};

export const createPost = post => {
  return axios.post(`${BASE_URL}/posts`, post);
};
