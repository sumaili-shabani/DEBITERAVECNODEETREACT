require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

const { Op } = require('sequelize');
const { User, Role } = require('../models/associations');
const SECRET_KEY = process.env.JWT_SECRET; // stocker dans .env en production

// Pagination des utilisateurs
exports.fetchUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const search = req.query.q || '';

        // 🔍 Construire le filtre de recherche
        const searchFilter = search
            ? {
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } },
                    { telephone: { [Op.like]: `%${search}%` } }
                ]
            }
            : {};

        // 🔁 Exécuter la requête avec JOIN + WHERE + PAGINATION
        const { count, rows } = await User.findAndCountAll({
            where: searchFilter,
            include: [
                {
                    model: Role,
                    as: 'role', // attention : le même alias que dans la relation
                    attributes: ['nom']
                }
            ],
            limit,
            offset
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            currentPage: page,
            perPage: limit,
            total: count,
            totalPages,
            data: rows
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

// Récupération d’un seul utilisateur
exports.fetchSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json({ data: user });
    } catch (err) {
        res.status(500).json({ err });
    }
};

// Création ou modification d’un utilisateur
exports.postUser = async (req, res) => {
    const { id, name, email, telephone, avatar, passwords, idRole, sexe } = req.body;
    try {
        const hashedPassword = passwords ? await bcrypt.hash(passwords, 10) : null;

        if (!id || id === "") {
            const newUser = await User.create({
                name,
                email,
                telephone,
                avatar: avatar || "avatar.png",
                passwords: hashedPassword,
                idRole,
                sexe,
            });
            res.status(201).json({ message: "Utilisateur ajouté avec succès", data: newUser });
        } else {
            await User.update({
                name,
                email,
                telephone,
                avatar,
                idRole,
                sexe,
            }, {
                where: { id },
            });
            res.json({ message: "Utilisateur modifié avec succès" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur interne" });
    }
};

// Suppression
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.destroy({ where: { id } });
        res.json({ message: "Utilisateur supprimé" });
    } catch (err) {
        res.status(500).json({ err });
    }
};

// Modification mot de passe
exports.editPassword = async (req, res) => {
    const { id, passwords, idRole } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(passwords, 10);
        await User.update({ passwords: hashedPassword, idRole }, { where: { id } });
        res.json({ message: "Mot de passe modifié avec succès !" });
    } catch (err) {
        res.status(500).json({ err: "Erreur interne de hachage" });
    }
};

// Modification d’avatar
exports.editAvatar = async (req, res) => {
    const id = req.body.id;
    const avatar = req.file ? req.file.filename : null;

    if (!avatar) return res.status(400).json({ message: "Aucune image envoyée" });

    try {
        await User.update({ avatar }, { where: { id } });
        res.json({ message: "Image de profil mise à jour avec succès", filename: avatar });
    } catch (err) {
        res.status(500).json({ err });
    }
};

/*
*
*==============================
*Pour l'authentification
*==============================
*
*/

// 🔐 Login
exports.login = async (req, res) => {
    const { email, passwords } = req.body;

    try {
        const user = await User.findOne({ where: { email }, include: ['role'] });

        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé", wrong:true });

        const passwordValid = await bcrypt.compare(passwords, user.passwords);
        if (!passwordValid) return res.status(401).json({ message: "Mot de passe incorrect", wrong: true });

        // Créer un token
        const token = jwt.sign(
            { id: user.id, role: user.idRole },
            SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            message: "Connexion réussie",
            wrong: false,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role?.nom
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Erreur de connexion", err });
    }
};

// 🚪 Logout (optionnel côté serveur)
exports.logout = (req, res) => {
    // Le logout se gère surtout côté client (supprimer le token du stockage local)
    res.json({ message: "Déconnexion réussie" });
};
