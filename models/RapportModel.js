const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const RapportModel = sequelize.define('RapportModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    annee: {
        type: DataTypes.STRING,
        allowNull: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sousTitre: {
        type: DataTypes.TEXT,
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
    slug:{
        type: DataTypes.STRING,
        allowNull: true
    }



}, {
    tableName: 'rapports',
    timestamps: true
});

module.exports = RapportModel;