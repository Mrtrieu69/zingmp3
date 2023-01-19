import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://zing-mp3-api.vercel.app/api/',
    timeout: 5000,
});

export default clientAxios;
