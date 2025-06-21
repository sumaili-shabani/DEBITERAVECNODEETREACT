// 📁 routes/export.routes.js
const express = require('express');
const ExcelJS = require('exceljs');
const router = express.Router();

const User = require('../models/User'); // Appel direct du modèle User
const Role = require('../models/Role'); // Appel direct du modèle User

router.get('/export-excel', async (req, res) => {
    try {
        const workbook = new ExcelJS.Workbook();

        // 🔹 Fonction utilitaire pour ajouter une feuille avec données
        const exportModelToSheet = async (model, sheetName) => {
            const data = await model.findAll({ raw: true });
            const worksheet = workbook.addWorksheet(sheetName);

            if (data.length > 0) {
                worksheet.columns = Object.keys(data[0]).map((key) => ({
                    header: key,
                    key,
                    width: 20,
                }));
                data.forEach((row) => worksheet.addRow(row));
            } else {
                worksheet.addRow(['Aucune donnée']);
            }
        };

        // 🔁 Ajouter les tables souhaitées
        await exportModelToSheet(User, 'Users');
        await exportModelToSheet(Role, 'Roles');

        // 🔽 Préparer le téléchargement
        res.setHeader(
            'Content-Disposition',
            'attachment; filename="export-database.xlsx"'
        );
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Erreur export Excel :', error);
        res.status(500).json({ message: 'Erreur export Excel', error: error.message });
    }
});
module.exports = router;
