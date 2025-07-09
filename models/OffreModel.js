const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const OffreModel = sequelize.define('OffreModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    dates: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lieu: {
        type: DataTypes.STRING,
        allowNull: true
    },
    organisation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lien: {
        type: DataTypes.STRING,
        allowNull: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    fichier: {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    },



}, {
    tableName: 'offres',
    timestamps: true
});

module.exports = OffreModel;