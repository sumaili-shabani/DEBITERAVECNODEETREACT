require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const path = require('path');

const { Op } = require('sequelize');
const { User, Role } = require('../models/associations');
const PasswordReset = require('../models/PasswordReset');
const { sendEmail } = require('../utils/mailer');
const SECRET_KEY = process.env.JWT_SECRET; // stocker dans .env en production
const BASE_URL = process.env.BASE_URL; // url de base stocker dans .env en production


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
            attributes: { exclude: ['passwords'] },
            include: [
                {
                    model: Role,
                    as: 'role', // attention : le même alias que dans la relation
                    attributes: ['nom']
                }
            ],
            limit,
            offset,
            order: [['id', 'DESC']]
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

// Récupération d’un seul utilisateur avec jointure sur la table Role
exports.fetchSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['passwords'] },
            include: [
                {
                    model: Role,
                    as: 'role', // Assure-toi que ce alias correspond bien à ta relation
                    attributes: ['nom']
                }
            ]
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.json({ data: user });

    } catch (err) {
        console.error('Erreur lors de la récupération de l’utilisateur :', err);
        res.status(500).json({ message: 'Erreur serveur', err });
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
                idRole:2,
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
        res.status(500).json({ err: "Erreur interne:" + err });
    }
};

//modification de profil
exports.editUserProfil = async (req, res) => {
    const { id, name, email, telephone, sexe } = req.body;
    try {

        if (id != "") {
            await User.update({
                name,
                email,
                telephone,
                sexe,
            }, {
                where: { id },
            });
            res.json({ message: "Utilisateur modifié avec succès" });
        } else {
            res.json({ message: "Veillez vérifier tous les champs!" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur interne:" + err });
    }
};

//modifier le mot de passe de la personne
exports.editPasswordProfil = async (req, res) => {
    const { id, passwords, idRole, newspasswords } = req.body;
    try {

        // vérification 
        const user = await User.findOne({ where: { id }, include: ['role'] });
        if (!user) return res.json({ message: "Utilisateur non trouvé", wrong: true });
        const passwordValid = await bcrypt.compare(passwords, user.passwords);
        if (!passwordValid) return res.json({ message: "Mot de passe incorrect", wrong: true });
        // fin vérification

        const hashedPassword = await bcrypt.hash(newspasswords, 10);
        await User.update({ passwords: hashedPassword }, { where: { id } });
        res.json({ message: "Mot de passe modifié avec succès !" });
    } catch (err) {
        res.status(500).json({ err: "Erreur interne de hachage" });
    }
};

// Création d’un compte utilisateur
exports.registerUser = async (req, res) => {
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
        res.status(500).json({ err: "Erreur interne:" + err });
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

//refresh token
exports.refreshToken = (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.status(401).json({ message: 'Refresh token requis' });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Refresh token invalide ou expiré' });

        // Générer un nouveau access token
        const newAccessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token: newAccessToken });
    });
};

// 🔐 Login
exports.login = async (req, res) => {
    const { email, passwords } = req.body;

    try {
        const user = await User.findOne({ where: { email }, include: ['role'] });
        if (!user) return res.status(401).json({ message: "Utilisateur non trouvé", wrong: true });

        const passwordValid = await bcrypt.compare(passwords, user.passwords);
        if (!passwordValid) return res.status(401).json({ message: "Mot de passe incorrect", wrong: true });

        // Access token
        const accessToken = jwt.sign(
            { id: user.id, role: user.idRole },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        // Refresh token
        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
        );

        // Stocker ce refresh token dans la base ou mémoire selon ton système
        // Ex: await Token.create({ userId: user.id, token: refreshToken })

        res.json({
            message: "Connexion réussie",
            wrong: false,
            token: accessToken,
            refreshToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                idRole: user.idRole,
                telephone: user.telephone,
                avatar: user.avatar,
                sexe: user.sexe,
                role: user.role?.nom
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur serveur", err });
    }
};

//login test
exports.login2 = async (req, res) => {
    const { email, passwords } = req.body;

    try {
        const user = await User.findOne({ where: { email }, include: ['role'] });

        if (!user) return res.json({ message: "Utilisateur non trouvé", wrong: true });

        const passwordValid = await bcrypt.compare(passwords, user.passwords);
        if (!passwordValid) return res.json({ message: "Mot de passe incorrect", wrong: true });

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
                idRole: user.idRole,
                telephone: user.telephone,
                avatar: user.avatar,
                sexe: user.sexe,
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

// 🟩 Demande de réinitialisation
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        // Hashernpx sequelize-cli db:migrate le token reçu pour comparaison
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        // Rechercher l'entrée correspondante et non expirée
        const resetEntry = await PasswordReset.findOne({
            where: {
                token: tokenHash,
                expiresAt: { [Op.gt]: new Date() },
            },
        });

        if (!resetEntry) {
            return res.status(400).json({ message: 'Token invalide ou expiré', wrong: true });
        }

        // Récupérer l'utilisateur
        const user = await User.findByPk(resetEntry.userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur introuvable. Ce compte n'existe pas", wrong: true });
        }

        // Hasher et mettre à jour le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.passwords = hashedPassword;
        await user.save();

        // Supprimer le token de réinitialisation
        await PasswordReset.destroy({ where: { id: resetEntry.id } });

        return res.json({ message: 'Mot de passe réinitialisé avec succès', wrong: false });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: "Erreur lors de la réinitialisation", err });
    }
};
// 🟩 Demande de mot de passe ublié
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // 1. Vérifie si l'utilisateur existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Aucun compte associé à cet email", wrong: true });
        }

        // 2. Génère un token sécurisé
        const token = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        // 3. Stocke le token haché avec date d’expiration
        await PasswordReset.create({
            userId: user.id,
            token: tokenHash,
            expiresAt: Date.now() + 1000 * 60 * 15, // 15 minutes
        });

        // 4. Envoie du lien de réinitialisation par email
        const link = `${BASE_URL}/reset-password/${token}`;
        const html = `
        <h3>Réinitialisation de mot de passe</h3>
        <p>Bonjour ${user.name},</p>
        <p>Cliquez sur ce lien pour réinitialiser votre mot de passe : </p>
        <a href="${link}" target="_blank">${link}</a>
        <p>Ce lien est valable pendant 15 minutes.</p>
      `;

        await sendEmail(user.email, 'Réinitialisation du mot de passe', html);

        return res.json({ message: 'Un lien de réinitialisation a été envoyé par email.', wrong: false });

    } catch (error) {
        console.error(error);
        return res.json({ message: "Erreur lors de la demande", error });
    }
};

// 🟩 envoied de mail de contact
exports.contactForm = async (req, res) => {
    const { name, email, telephone, subject, message } = req.body;

    try {
        // Vérification simple
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis." });
        }

        // Contenu HTML de l'email
        const html = `
            <h3>📩 Nouveau message de contact</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${telephone || 'Non fourni'}</p>
            <p><strong>Sujet :</strong> ${subject}</p>
            <p><strong>Message :</strong><br/>${message}</p>
        `;

        // Adresse où tu veux recevoir les messages
        const toEmail = 'info@swiftride.net';

        // Envoi de l'email
        await sendEmail(toEmail, `📬 Nouveau message de ${name}`, html);

        return res.json({ message: "Message envoyé avec succès." });

    } catch (error) {
        console.error("Erreur contactForm:", error);
        return res.status(500).json({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
};


