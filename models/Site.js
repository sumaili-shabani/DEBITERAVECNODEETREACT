const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Site = sequelize.define('Site', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    adresse: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    tel1: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    tel2: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    tel3: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    token: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    about: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    mission: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    objectif: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    politique: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    condition: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    logo: {
        type: DataTypes.STRING(250),
        allowNull: true,
        defaultValue: 'logo.png'
    },
    facebook: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    linkedin: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    twitter: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    youtube: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    whatsapp: {
        type: DataTypes.STRING(250),
        allowNull: true
    }
    
}, {
    tableName: 'sites',
    timestamps: true
});

module.exports = Site;