const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const GaleryModel = sequelize.define('GaleryModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    icone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    


}, {
    tableName: 'galeries',
    timestamps: true
});

module.exports = GaleryModel;