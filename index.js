const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
//sequelize
const sequelize = require('./config/sequelize');

const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const dashboardRoutes = require('./routes/dashboard');
const siteRoutes = require('./routes/SiteRoutes');

const backupRoutes = require('./backup/backupRoutes');
const exportRoutes = require('./backup/exportDatabaseToExcel'); // 👈 chemin correct ici


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📂 Serve les images statiques
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', siteRoutes);
app.use('/api/backup', backupRoutes);
app.use('/api', exportRoutes);


sequelize.authenticate()
    .then(() => console.log('Connexion Sequelize OK'))
    .catch(err => console.error('Erreur Sequelize :', err));

// importation des models
require('./models/User');
require('./models/Role');

sequelize.sync({ alter: true }).then(() => {
    console.log('Base de données synchronisée');
}).catch((err) => {
    console.error("Erreur de synchronisation des tables :", err);
});

// Démarrage serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
