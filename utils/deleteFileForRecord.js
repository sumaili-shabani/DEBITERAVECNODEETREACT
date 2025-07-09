// utils/deleteFileForRecord.js

const fs = require('fs');
const path = require('path');

/**
 * Supprime un fichier lié à un enregistrement d'un modèle Sequelize.
 *
 * @param {Sequelize.Model} Model - Ton modèle Sequelize (ex: PartenaireModel)
 * @param {string|number} id - L'ID de l'enregistrement à chercher
 * @param {string} columnName - Le nom de la colonne qui contient le nom du fichier (ex: 'logo')
 * @param {string} uploadDir - Le chemin absolu ou relatif vers ton dossier upload
 * @param {string[]} protectedFiles - Liste des fichiers à ne jamais supprimer (ex: ['avatar.png', 'logo.png'])
 * @returns {Promise<boolean>} - true si un fichier a été supprimé, false sinon
 */
async function deleteFileForRecord(Model, id, columnName, uploadDir, protectedFiles = []) {
    // 1️⃣ Vérifier l'enregistrement
    const record = await Model.findByPk(id);

    if (!record) {
        throw new Error(`Enregistrement non trouvé (id: ${id})`);
    }

    // 2️⃣ Vérifier le nom du fichier dans la colonne
    const fileName = record[columnName];

    if (!fileName) {
        console.log(`ℹ️ Aucun fichier à supprimer pour la colonne : ${columnName}`);
        return false;
    }

    // 3️⃣ Chemin complet
    const filePath = path.join(uploadDir, fileName);

    // 4️⃣ Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ Fichier introuvable sur le disque : ${filePath}`);
        return false;
    }

    // 5️⃣ Vérifier si le fichier est protégé
    if (protectedFiles.includes(fileName)) {
        console.log(`ℹ️ Fichier protégé, non supprimé : ${fileName}`);
        return false;
    }

    // 6️⃣ Supprimer le fichier
    try {
        await fs.promises.unlink(filePath);
        console.log(`✅ Fichier supprimé : ${filePath}`);
        return true;
    } catch (err) {
        console.error(`❌ Erreur lors de la suppression du fichier : ${err.message}`);
        return false;
    }
}

module.exports = { deleteFileForRecord };
