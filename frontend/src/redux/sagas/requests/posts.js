import axios from 'axios';
const apiEndpoint = 'http://localhost:8080/posts';
export function getPosts() {
  return axios.request({
    method: 'get',
    url: apiEndpoint,
  });
}
