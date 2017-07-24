import axios from 'axios';
import CONFIG from '@/config';

let API = {};

API.get = function (module, method) {

    return axios.get(CONFIG.server.address + '/' + module)
        .catch(e => {
            console.log(e);
        })
}

export default API;