import axios from 'axios';
export const apiURL = "http://localhost:5000/api";
export const baseURL = "http://localhost:5000";
export const fileUrl = "http://localhost:5000";

const api = axios.create({
    baseURL: apiURL, // 📝 Change selon ton backend
    headers: {
        'Content-Type': 'application/json',
    },
});



// Ajoute automatiquement le token JWT si présent
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;