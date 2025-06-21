import api from './config';
import { toast } from 'react-toastify';
import Swal, { SweetAlertIcon } from 'sweetalert2';

export const fetchAll = async (endpoint: string, params = {}) => {
    try {
        const res = await api.get(endpoint, { params });
        return res.data;
    } catch (err: any) {
        showError("Erreur de chargement " + err);
        throw err;
    }
};

export const getOne = async (endpoint: string, id: number) => {
    try {
        const res = await api.get(`${endpoint}/${id}`);
        return res.data;
    } catch (err: any) {
        showError("Élément introuvable " + err);
        throw err;
    }
};

export const createItem = async (endpoint: string, data: any) => {
    try {
        const res = await api.post(endpoint, data);
        const response = res.data;
        showMessage(`${response.message}`);
        // showMessage("Ajout réussi");
        return res.data;
    } catch (err: any) {
        showError("Échec de l'ajout " + err);
        throw err;
    }
};

export const createItemImageForm = async (
    endpoint: string,
    data: any,
    config: object = {}
) => {
    try {
        const res = await api.post(endpoint, data, config);
        showMessage("Ajout réussi");
        return res.data;
    } catch (err: any) {
        showError("Échec de l'ajout " + err);
        throw err;
    }
};

export const updateItem = async (endpoint: string, id: number, data: any) => {
    try {
        const res = await api.put(`${endpoint}/${id}`, data);
        showMessage("Mise à jour réussie");
        return res.data;
    } catch (err: any) {
        showError("Échec de la mise à jour " + err);
        throw err;
    }
};

export const deleteItem = async (endpoint: string, id: number) => {
    try {
        await api.delete(`${endpoint}/${id}`);
        showMessage("Suppression réussie");
    } catch (err: any) {
        showError("Échec de la suppression " + err);
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
        showMessage("Image uploadée");
        return res.data;
    } catch (err: any) {
        showError("Échec de l'upload " + err);
        throw err;
    }
};

// ✅ Fonctions de notification corrigées
export const showError = (message: String) => {
    toast.error(message.toString());
};

export const showMessage = (message: String) => {
    toast.success(message.toString());
};

export const showInfoMessage = (message: String) => {
    toast.warning(message.toString());
};

/*
*
*=======================
* Pour le suite d'alert
*=======================
*
*/
const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
type ConfirmationOptions = {
    title?: string;
    text?: string;
    icon?: SweetAlertIcon;
    confirmButtonText?: string;
    cancelButtonText?: string;
};

export const showConfirmationDialog = async (options?: ConfirmationOptions) => {
    const {
        title = 'Êtes-vous sûr ?',
        text = 'Cette action est irréversible !',
        icon = 'warning',
        confirmButtonText = 'Oui, confirmer',
        cancelButtonText = 'Annuler',
    } = options || {};

    const result = await Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText,
        cancelButtonText,
        customClass: {
            popup: isDarkMode ? 'swal-dark' : '',
            title: isDarkMode ? 'swal-title-dark' : '',
        },

    });

    return result.isConfirmed;
};

//par rapport
export function formatDateFR(dateStr: string): string {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function extractTime(dateStr: string): string {
    const date = new Date(dateStr);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export function truncateText(text: string, maxLength = 10): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}
interface ChartData {
    category: string[];
    value: number[];
}
export function formatChartData(chartData?: Partial<ChartData>): { name: string; value: number }[] {
    if (chartData?.category && chartData?.value) {
        return chartData.category.map((name, index) => ({
            name,
            value: chartData.value?.[index] ?? 0
        }));
    }
    return [];
}


