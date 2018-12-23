import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-49f5e.firebaseio.com/"
});

export default instance;