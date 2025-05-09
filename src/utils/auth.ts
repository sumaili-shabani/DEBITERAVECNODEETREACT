export const isAuthenticated = (): boolean => {
    // Ex: on vérifie s'il y a un token stocké dans le localStorage
    return !!localStorage.getItem('token');
};