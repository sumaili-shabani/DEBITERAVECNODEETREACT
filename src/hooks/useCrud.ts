import {
    fetchAll,
    getOne,
    createItem,
    deleteItem,
    showError,
    createItemImageForm,
} from '../api/callApi';

interface ApiListParams {
    q?: string;
    page: number;
    limit: number;
}

export const fetchItems = async <T>(endpoint: string, params: ApiListParams) => {
    try {
        const res = await fetchAll(endpoint, params);
        return res;
    } catch (err) {
        showError("Erreur lors du chargement");
        throw err;
    }
};

export const fetchItem = async <T>(endpoint: string, id: number): Promise<T> => {
    try {
        const res = await getOne(endpoint, id);
        return res.data;
    } catch (err) {
        showError("Erreur lors du chargement de l'élément");
        throw err;
    }
};

export const saveItem = async <T>(endpoint: string, data: Partial<T>) => {
    try {
        await createItem(endpoint, data);
    } catch {
        showError("Erreur lors de l'enregistrement");
        throw new Error();
    }
};

export const saveItemImageForm = async <T>(endpoint: string, data: FormData) => {
    try {
        await createItemImageForm(endpoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch {
        showError("Erreur lors de l'enregistrement");
        throw new Error();
    }
  };

export const removeItem = async (endpoint: string, id: number) => {
    try {
        await deleteItem(endpoint, id);
    } catch {
        showError("Erreur lors de la suppression");
        throw new Error();
    }
};
  