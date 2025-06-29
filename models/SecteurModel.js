const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const SecteurModel = sequelize.define('SecteurModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nomSecteur: {
        type: DataTypes.STRING,
        allowNull: true
    },
    


}, {
    tableName: 'secteurs',
    timestamps: true
});

module.exports = SecteurModel;