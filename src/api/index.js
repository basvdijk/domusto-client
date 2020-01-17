import axios from 'axios';
import CONFIG from '@/config';

const API = {};
API.get = module =>
  axios.get(`${CONFIG.server.address}/${module}`)
    .catch(e => console.log(e));
export default API;
