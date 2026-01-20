import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.tarunatech-ems-4q4k.vercel.app, // BACKEND URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Attach token automatically
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
