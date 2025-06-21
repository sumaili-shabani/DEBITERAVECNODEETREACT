// auth.ts (complété avec auto-refresh JWT)
import axios from 'axios';
import { showError, showMessage } from './callApi';
import api from './config';
import { saveUser } from './storage';

interface LoginData {
    email: string;
    passwords: string;
}

export interface forgotPasswordData {
    email: string;
}

export interface resetPasswordData {
    token: String | undefined | any;
    newPassword: String;
}

export interface RegisterData {
    id: any;
    name: string;
    email: string;
    telephone: string;
    adresse: string;
    sexe: string;
    idRole: number;
    avatar: string;
    passwords: string;
    password2: string;
}

export const login = async (data: LoginData) => {
    try {
        const res = await api.post('/login', data);
        const { wrong, token, user, refreshToken, message } = res.data;

        if (wrong || !token || !refreshToken || !user) {
            showError("Informations incorrectes ou réponse invalide.");
            return { success: false };
        }

        // Sauvegarder les données
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        saveUser(token, user);

        showMessage(`${message} Bienvenue ${user.name}`);
        return { success: true, user };

    } catch (err: any) {
        const errorMsg = err.response?.data?.message || 'Erreur de connexion au serveur.';
        console.error('Erreur de login:', err);
        showError(errorMsg);
        return { success: false };
    }
};

export const registerAnCount = async (svData: RegisterData) => {
    try {
        const res = await api.post('/register_user', svData);
        const { data, message, err } = res.data;
        if (data) {
            showMessage(message + ' ' + data.name);
            return { success: true, data };
        } else {
            showError(err!);
            return { success: false };
        }
    } catch (err: any) {
        showError(err.response?.data?.message || 'Erreur de connexion');
        return { success: false };
    }
};

export const forgotPassword = async (svData: forgotPasswordData) => {
    try {
        const res = await api.post('/forgot-password', svData);
        const { wrong, message, err } = res.data;
        if (!wrong) {
            showMessage(message);
            return { success: true };
        } else {
            showError(err!);
            return { success: false };
        }
    } catch (err: any) {
        showError(err.response?.data?.message || 'Erreur de connexion');
        return { success: false };
    }
};

export const resetPassword = async (svData: resetPasswordData) => {
    try {
        const res = await api.post('/reset-password', svData);
        const { wrong, message, err } = res.data;
        if (!wrong) {
            showMessage(message);
            return { success: true, message };
        } else {
            showError(err!);
            return { success: false };
        }
    } catch (err: any) {
        showError(err.response?.data?.message || 'Erreur de connexion');
        return { success: false };
    }
};

