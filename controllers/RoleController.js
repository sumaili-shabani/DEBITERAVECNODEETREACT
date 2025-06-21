const Role = require('../models/Role');
const { Op } = require('sequelize');

// 🔹 Récupérer tous les rôles

exports.fetchRoles = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const search = req.query.q || '';

    // 🔍 Construction du filtre de recherche
    const searchFilter = search
        ? {
            nom: { [Op.like]: `%${search}%` }
        }
        : {};

    try {
        const { count, rows } = await Role.findAndCountAll({
            where: searchFilter,
            limit,
            offset,
            order: [['id', 'DESC']]
        });

        res.status(200).json({
            currentPage: page,
            perPage: limit,
            total: count,
            totalPages: Math.ceil(count / limit),
            data: rows
        });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération des rôles avec recherche et pagination" });
    }
};

// 🔹 Récupérer tous les rôles avec alias : nom → label, id → value
exports.fetchAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll({
            attributes: [
                ['id', 'value'],     // alias de id => value
                ['nom', 'label']     // alias de nom => label
            ]
        });

        if (!roles || roles.length === 0) {
            return res.status(404).json({ data: [] });
        }

        res.status(200).json({ data: roles });
    } catch (err) {
        console.error("Erreur lors de la récupération des rôles :", err);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// 🔹 Récupérer un seul rôle par ID
exports.fetchSigleRoles = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (!role) return res.status(404).json({ message: "Rôle introuvable" });
        res.status(200).json({ data: role });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération du rôle" });
    }
};

// 🔹 Ajouter ou modifier un rôle
exports.postRole = async (req, res) => {
    const { id, nom } = req.body;
    try {
        if (!id || id === "") {
            // 🔸 Insertion
            await Role.create({ nom });
            res.status(200).json({ message: "Insertion avec succès !!!" });
        } else {
            // 🔸 Mise à jour
            const [updated] = await Role.update({ nom }, { where: { id } });
            if (updated) {
                res.status(200).json({ message: "Modification avec succès !!!" });
            } else {
                res.status(404).json({ message: "Rôle introuvable" });
            }
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de l'opération : " + err });
    }
};

// 🔹 Supprimer un rôle
exports.deleteRole = async (req, res) => {
    try {
        const deleted = await Role.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Suppression réussie" });
        } else {
            res.status(404).json({ message: "Rôle introuvable" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la suppression" });
    }
};