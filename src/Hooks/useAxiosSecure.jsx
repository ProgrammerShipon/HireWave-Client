import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import useAuth from './useAuth';

// serverLink = "https://hire-wave-server.vercel.app/api";
// serverLink = "http://localhost:3030/api";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3030/api',
    // baseURL: 'https://hire-wave-server.vercel.app/api/',
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

        // axiosSecure.interceptors.response.use(
        //     (response) => response,
        //     async (error) => {
        //         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        //             await logOut();
        //             navigate('/login');
        //         }
        //         return Promise.reject(error);
        //     }
        // );
    }, []);

    return [axiosSecure];
};

export default useAxiosSecure;