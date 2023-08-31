import axios from 'axios';

const useAxios = axios.create({
    baseURL: 'https://hire-wave-server.vercel.app/api',
    // baseURL: 'http://localhost:3030/api',
});

export default useAxios;