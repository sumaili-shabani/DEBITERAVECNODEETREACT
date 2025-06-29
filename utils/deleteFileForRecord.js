const fs = require('fs');
const path = require('path');

/**
 * Supprime un fichier lié à un enregistrement d'un modèle Sequelize.
 * 
 * @param {Sequelize.Model} Model - Ton modèle Sequelize (ex: PartenaireMadel)
 * @param {string|number} id - L'ID de l'enregistrement à chercher
 * @param {string} columnName - Le nom de la colonne qui contient le nom du fichier (ex: 'icone')
 * @param {string} uploadDir - Le chemin vers ton dossier upload
 * @returns {Promise<boolean>} - true si un fichier a été supprimé, false sinon
 */
async function deleteFileForRecord(Model, id, columnName, uploadDir) {
    const record = await Model.findByPk(id);

    if (!record) {
        throw new Error("Enregistrement non trouvé");
    }

    const fileName = record[columnName];
    if (fileName) {
        const filePath = path.join(uploadDir, fileName);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`✅ Fichier supprimé : ${filePath}`);
            return true;
        } else {
            console.log(`⚠️ Fichier introuvable sur le disque : ${filePath}`);
        }
    } else {
        console.log(`ℹ️ Pas de fichier pour la colonne : ${columnName}`);
    }

    return false;
}

module.exports = { deleteFileForRecord };
