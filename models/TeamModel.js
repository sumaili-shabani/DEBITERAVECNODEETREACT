const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const TeamModel = sequelize.define('TeamModel', {
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
    fonction: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },



}, {
    tableName: 'teams',
    timestamps: true
});

module.exports = TeamModel;