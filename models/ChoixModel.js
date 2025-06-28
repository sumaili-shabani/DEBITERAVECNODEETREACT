const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ChoixModel = sequelize.define('choixModel', {
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
    tableName: 'choix',
    timestamps: true
});

module.exports = ChoixModel;