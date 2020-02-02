import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-7fa2f.firebaseio.com/',
});

export default instance;