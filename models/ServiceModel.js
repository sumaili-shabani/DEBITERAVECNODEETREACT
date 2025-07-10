const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ServiceModel = sequelize.define('ServiceModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nom: {
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
    icone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    },


}, {
    tableName: 'services',
    timestamps: true
});

module.exports = ServiceModel;