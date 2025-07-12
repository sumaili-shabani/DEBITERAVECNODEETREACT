// sequelize.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // 🔑 Charge les variables depuis .env

const sequelize = new Sequelize(
    process.env.DB_NAME,     // 👈 nom de la base
    process.env.DB_USER,     // 👈 utilisateur
    process.env.DB_PASSWORD, // 👈 mot de passe
    {
        host: process.env.DB_HOST,     // 👈 hôte
        dialect: process.env.DB_DIALECT, // 👈 dialecte (mysql)
        logging: false, // désactive les logs SQL (optionnel)
    }
);

module.exports = sequelize;
