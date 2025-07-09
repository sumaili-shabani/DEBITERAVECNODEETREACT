const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ProjetModel = sequelize.define('ProjetModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    idSecteur: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'secteurs',     // nom de la table cible
            key: 'id'             // clé primaire de la table cible
        },
        
    },

    annee: {
        type: DataTypes.STRING,
        allowNull: true
    },
    budget: {
        type: DataTypes.STRING,
        allowNull: true
    },
    organisation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    soustitre: {
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

    slug: {
        type: DataTypes.STRING,
        allowNull: false

    },




}, {
    tableName: 'projets',
    timestamps: true
});

module.exports = ProjetModel;