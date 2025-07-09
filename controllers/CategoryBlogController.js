const CategoryBlogModel = require('../models/CategoryBlogModel');
const { Op } = require('sequelize');
const { generateSlug } = require('../utils/trait');

// 🔹 Récupérer tous les éléments
exports.fetchDatas = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const search = req.query.q || '';

    // 🔍 Construction du filtre de recherche
    const searchFilter = search
        ? {
            titre: { [Op.like]: `%${search}%` }
        }
        : {};

    try {
        const { count, rows } = await CategoryBlogModel.findAndCountAll({
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
        const datas = await CategoryBlogModel.findAll({
            attributes: [
                ['id', 'value'],     // alias de id => value
                ['titre', 'label']     // alias de nom => label
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
        const datas = await CategoryBlogModel.findByPk(req.params.id);
        if (!datas) return res.status(404).json({ message: "Donnée introuvable" });
        res.status(200).json({ data: datas });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération des Données" });
    }
};

// 🔹 Ajouter ou modifier un élément
exports.postData = async (req, res) => {
    const { id, titre } = req.body;
    const mySlug = generateSlug(titre);
    try {
        if (!id || id === "") {
            // 🔸 Insertion
            await CategoryBlogModel.create({ titre, slug: mySlug });
            res.status(200).json({ message: "Insertion avec succès !!!" });
        } else {
            // 🔸 Mise à jour
            const [updated] = await CategoryBlogModel.update({ titre }, { where: { id } });
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

// 🔹 Supprimer un élément
exports.deleteData = async (req, res) => {
    try {
        const deleted = await CategoryBlogModel.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Suppression réussie" });
        } else {
            res.status(404).json({ message: "Donnée introuvable" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la suppression" });
    }
};