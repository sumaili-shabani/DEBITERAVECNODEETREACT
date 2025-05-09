import api from './config';
import { toast } from 'react-toastify';

export const fetchAll = async (endpoint: string, params = {}) => {
    try {
        const res = await api.get(endpoint, { params });
        return res.data;
    } catch (err: any) {
        toast.error("Erreur de chargement");
        throw err;
    }
};

export const getOne = async (endpoint: string, id: number) => {
    try {
        const res = await api.get(`${endpoint}/${id}`);
        return res.data;
    } catch (err: any) {
        toast.error("Élément introuvable");
        throw err;
    }
};

export const createItem = async (endpoint: string, data: any) => {
    try {
        const res = await api.post(endpoint, data);
        toast.success("Ajout réussi");
        return res.data;
    } catch (err: any) {
        toast.error("Échec de l'ajout");
        throw err;
    }
};

export const updateItem = async (endpoint: string, id: number, data: any) => {
    try {
        const res = await api.put(`${endpoint}/${id}`, data);
        toast.success("Mise à jour réussie");
        return res.data;
    } catch (err: any) {
        toast.error("Échec de la mise à jour");
        throw err;
    }
};

export const deleteItem = async (endpoint: string, id: number) => {
    try {
        await api.delete(`${endpoint}/${id}`);
        toast.success("Suppression réussie");
    } catch (err: any) {
        toast.error("Échec de la suppression");
        throw err;
    }
};

export const uploadImage = async (endpoint: string, file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const res = await api.post(endpoint, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success("Image uploadée");
        return res.data;
    } catch (err: any) {
        toast.error("Échec de l'upload");
        throw err;
    }
};

//affichage de message
export const showError = (message: String)=>{
    toast.error(message);
}

export const showMessage = (message: String) => {
    toast.success(message);
}
export const showInfoMessage = (message: String) => {
    toast.warning(message);
}