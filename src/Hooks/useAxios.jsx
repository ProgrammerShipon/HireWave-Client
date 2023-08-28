import axios from 'axios';

const useAxios = axios.create({
    baseURL: 'https://hire-wave-server.vercel.app/api',
});

export default useAxios;