const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('drendystock', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // désactive les logs SQL (optionnel)
});

module.exports = sequelize;