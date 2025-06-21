import axios from 'axios';

export const apiURL = "http://localhost:5000/api";
export const baseURL = "http://localhost:5000";
export const fileUrl = "http://localhost:5000";

// Création de l'instance axios
const api = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 🔐 Ajoute automatiquement le token JWT si présent
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ♻️ Rafraîchit automatiquement le token expiré (si 401) et rejoue la requête
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                return Promise.reject(error); // Pas de refreshToken ? On abandonne.
            }

            try {
                const response = await axios.post(`${apiURL}/refresh-token`, {
                    refreshToken,
                });

                const newToken = response.data.token;
                // Sauvegarder le nouveau token
                localStorage.setItem('token', newToken);

                // Rejouer la requête avec le nouveau token
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return api(originalRequest);

            } catch (refreshError) {
                console.error("Erreur lors du rafraîchissement du token", refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
