const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, 'backups');

// Créer le dossier backup s’il n’existe pas
if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR);

// 🟢 Lancer un backup manuel
router.get('/generate', (req, res) => {
    const filename = `backup_${moment().format('YYYY-MM-DD_HH-mm-ss')}.sql`;
    const filepath = path.join(BACKUP_DIR, filename);

    // ✅ Pas de mot de passe, pas de `-p`
    const command = `mysqldump -u root elimu > "${filepath}"`;

    exec(command, (err) => {
        if (err) return res.status(500).json({ error: "Erreur de sauvegarde", detail: err.message });

        res.json({ message: "Sauvegarde créée avec succès", filename });
    });
});

// 📄 Lister les backups
router.get('/list', (req, res) => {
    fs.readdir(BACKUP_DIR, (err, files) => {
        if (err) return res.status(500).json({ error: "Erreur de lecture", detail: err.message });

        const backups = files.map(file => ({
            name: file,
            date: fs.statSync(path.join(BACKUP_DIR, file)).mtime
        }));

        res.json({ backups });
    });
});

// ⬇️ Télécharger un backup
router.get('/download/:filename', (req, res) => {
    const file = path.join(BACKUP_DIR, req.params.filename);
    if (!fs.existsSync(file)) return res.status(404).json({ message: "Fichier introuvable" });
    res.download(file);
});

module.exports = router;
