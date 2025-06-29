const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const PartenaireModel = sequelize.define('PartenaireModel', {
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
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    icone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    


}, {
    tableName: 'partenaires',
    timestamps: true
});

module.exports = PartenaireModel;