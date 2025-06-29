const { BlogModel, CategoryBlogModel } = require('../models/associations');
const { Op } = require('sequelize');

// 🔹 Récupérer tous les rôles
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
        const { count, rows } = await BlogModel.findAndCountAll({
            where: searchFilter,
            include: [
                {
                    model: CategoryBlogModel,
                    as: 'category_blog', // attention : le même alias que dans la relation
                    attributes: ['titre']
                }
            ],
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
        const datas = await BlogModel.findAll({
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
        const datas = await BlogModel.findByPk(req.params.id);
        if (!datas) return res.status(404).json({ message: "Donnée introuvable" });
        res.status(200).json({ data: datas });
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la récupération des Données" });
    }
};

// 🔹 Ajouter ou modifier un élément
exports.postData = async (req, res) => {
    const { id, idCategory, titre, sousTitre, description } = req.body;
    try {
        if (!id || id === "") {
            // 🔸 Insertion
            await BlogModel.create({ idCategory, titre, sousTitre, description });
            res.status(200).json({ message: "Insertion avec succès !!!" });
        } else {
            // 🔸 Mise à jour
            const [updated] = await BlogModel.update({ idCategory, titre, sousTitre, description }, { where: { id } });
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

// 🔹 Status blog
exports.editStatus = async (req, res) => {
    const { id } = req.body;

    const site = await BlogModel.findByPk(id);
    if (!site) {
        return res.status(404).json({ message: "blog non trouvé" });
    }

    try {

        if (site.status == 0) {
            // 🔹 Mise à jour
            await BlogModel.update({ status: 1 }, { where: { id } });

            res.json({ message: "Blog activé avec succès!!!" });


        } else {
            await BlogModel.update({ status: 0 }, { where: { id } });

            res.json({ message: "Blog desactivé avec succès!!!" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }



};

// 🔹 Modifier la photo
exports.editLogo = async (req, res) => {
    const id = req.body.id;
    const logo = req.file ? req.file.filename : null;

    if (!logo) return res.status(400).json({ message: "Aucune image envoyée" });

    try {
        //appel de la fonction de suppression de l'ancien fichier
        await deleteFileForRecord(
            BlogModel,          // Ton modèle Sequelize
            id,                // L'ID
            'icone',           // La colonne qui contient le nom du fichier
            path.join(__dirname, '../upload/images') // Ton dossier uploads
        );
        // 3. Mettre à jour avec le nouveau logo
        await BlogModel.update({ icone: logo }, { where: { id } });

        res.json({ message: "Image de profil mise à jour avec succès", filename: logo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

// 🔹 Supprimer un élément
exports.deleteData = async (req, res) => {
    try {
        const deleted = await BlogModel.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Suppression réussie" });
        } else {
            res.status(404).json({ message: "Donnée introuvable" });
        }
    } catch (err) {
        res.status(500).json({ err: "Erreur lors de la suppression" });
    }
};