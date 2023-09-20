import axios from 'axios';
import { useEffect } from 'react';
// import useAuth from './useAuth';

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:3030/api',
      baseURL: 'https://hire-wave.onrender.com/api',
});

const useAxiosSecure = () => {
    // const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
    }, []);
    return [axiosSecure];
};

export default useAxiosSecure;