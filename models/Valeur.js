const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Valeur = sequelize.define('Valeur', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    icone: {
        type: DataTypes.STRING,
        allowNull: true
    },


}, {
    tableName: 'valeurs',
    timestamps: true
});

module.exports = Valeur;