const Site = require('../models/Site');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');



// 🔹 Récupérer tous les sites
exports.fetchSites = async (req, res) => {
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
        const { count, rows } = await Site.findAndCountAll({
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
        res.status(500).json({ err: "Erreur lors de la récupération des sites avec recherche et pagination" });
    }
};


// 🔹 Récupérer un seul par ID
exports.fetchSigleSites = async (req, res) => {
    try {
        const data = await Site.findByPk(req.params.id);
        if (!data) return res.json({ message: "Donnée introuvable" });
        res.status(200).json({ data: data });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération du rôle" });
    }
};

// 🔹 Ajouter ou modifier un site
exports.postSite = async (req, res) => {
    const {
        id,
        nom,
        description,
        email,
        adresse,
        tel1,
        tel2,
        tel3,
        token,
        about,
        mission,
        objectif,
        politique,
        condition,
        logo,
        facebook,
        linkedin,
        twitter,
        youtube,
        whatsapp
    } = req.body;

    try {
        const siteData = {
            nom,
            description,
            email,
            adresse,
            tel1,
            tel2,
            tel3,
            token,
            about,
            mission,
            objectif,
            politique,
            condition,
            logo: logo||'logo.png',
            facebook,
            linkedin,
            twitter,
            youtube,
            whatsapp
        };

        if (!id || id === "") {
            // 🔸 Insertion
            await Site.create(siteData);
            res.status(201).json({ message: "Site ajouté avec succès !" });
        } else {
            // 🔸 Mise à jour
            const [updated] = await Site.update(siteData, { where: { id } });
            if (updated) {
                res.status(200).json({ message: "Site modifié avec succès !" });
            } else {
                res.status(404).json({ message: "Site non trouvé pour la mise à jour." });
            }
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de l'opération : " + err.message });
    }
};

// 🔹 Supprimer 
exports.deleteSite = async (req, res) => {
    try {
        const deleted = await Site.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Suppression réussie" });
        } else {
            res.status(404).json({ message: "Site introuvable" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la suppression" });
    }
};

// Modification de logo
// exports.editLogo = async (req, res) => {
//     const id = req.body.id;
//     const logo = req.file ? req.file.filename : null;

//     if (!logo) return res.status(400).json({ message: "Aucune image envoyée" });

//     try {
//         await Site.update({ logo }, { where: { id } });
//         res.json({ message: "Image de profil mise à jour avec succès", filename: logo });
//     } catch (err) {
//         res.status(500).json({ err });
//     }
// };

exports.editLogo = async (req, res) => {
    const id = req.body.id;
    const logo = req.file ? req.file.filename : null;

    if (!logo) return res.status(400).json({ message: "Aucune image envoyée" });

    try {
        // 1. Récupérer les infos actuelles du site
        const site = await Site.findByPk(id);
        if (!site) {
            return res.status(404).json({ message: "Site non trouvé" });
        }

        // 2. Supprimer l'ancien fichier logo s'il existe
        if (site.logo) {
            const oldLogoPath = path.join(__dirname, '../upload/images', site.logo);
            if (fs.existsSync(oldLogoPath)) {
                fs.unlinkSync(oldLogoPath); // Supprime l'ancien fichier
            }
        }

        // 3. Mettre à jour avec le nouveau logo
        await Site.update({ logo }, { where: { id } });

        res.json({ message: "Image de profil mise à jour avec succès", filename: logo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};
  

