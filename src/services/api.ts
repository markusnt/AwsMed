import axios from 'axios';

const api = axios.create({
  baseURL: 'http://frontendtest.awsmed.com.br:3000/',
  headers: { 'x-frontend-test': 'aurumtest' },
});

export default api;
