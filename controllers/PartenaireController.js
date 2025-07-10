const PartenaireMadel = require('../models/PartenaireMadel');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { deleteFileForRecord } = require('../utils/deleteFileForRecord');

// 🔹 Récupérer tous les rôles
exports.fetchDatas = async (req, res) => {
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
        const { count, rows } = await PartenaireMadel.findAndCountAll({
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
        res.status(500).json({ err: "Erreur lors de la récupération des données avec recherche et pagination" });
    }
};

// 🔹 Récupérer tous les rôles avec alias : nom → label, id → value
exports.fetchAllDatas = async (req, res) => {
    try {
        const datas = await PartenaireMadel.findAll({
            attributes: [
                ['id', 'value'],     // alias de id => value
                ['icone', 'label']     // alias de nom => label
            ]
        });

        if (!datas || datas.length === 0) {
            return res.status(404).json({ data: [] });
        }

        res.status(200).json({ data: datas });
    } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// 🔹 Récupérer une seule donnée par ID
exports.fetchSigleData = async (req, res) => {
    try {
        const datas = await PartenaireMadel.findByPk(req.params.id);
        if (!datas) return res.status(404).json({ message: "Donnée introuvable" });
        res.status(200).json({ data: datas });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération des Données" });
    }
};

// 🔹 Ajouter ou modifier un élément
exports.postData = async (req, res) => {
    const { id, nom, url } = req.body;
    try {
        if (!id || id === "") {
            // 🔸 Insertion
            await PartenaireMadel.create({ nom, url, icone: 'logo.png' });
            res.status(200).json({ message: "Insertion avec succès !!!" });
        } else {
            // 🔸 Mise à jour
            const [updated] = await PartenaireMadel.update({ nom, url }, { where: { id } });
            if (updated) {
                res.status(200).json({ message: "Modification avec succès !!!" });
            } else {
                res.status(404).json({ message: "Donnée introuvable" });
            }
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de l'opération : " + err });
    }
};

// 🔹 Modifier la photo
exports.editLogo = async (req, res) => {
    const id = req.body.id;
    const logo = req.file ? req.file.filename : null;

    if (!logo) return res.status(400).json({ message: "Aucune image envoyée" });

    try {

        //appel de la fonction de suppression de l'ancien fichier
        // ✅ Supprimer l'ancien fichier avant la modification
        await deleteFileForRecord(
            PartenaireMadel,
            id,
            'icone', // colonne
            path.join(__dirname, '../upload/images'),
            ['logo.png', 'avatar.png'] // fichiers protégés
        );
        // 3. Mettre à jour avec le nouveau logo
        await PartenaireMadel.update({ icone: logo }, { where: { id } });

        res.json({ message: "Image de profil mise à jour avec succès", filename: logo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};
// 🔹 Supprimer un élément
exports.deleteData = async (req, res) => {
    try {
        const deleted = await PartenaireMadel.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Suppression réussie" });
        } else {
            res.status(404).json({ message: "Donnée introuvable" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la suppression" });
    }
};