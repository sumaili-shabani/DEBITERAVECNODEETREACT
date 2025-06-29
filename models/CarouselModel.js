const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BasicModel = sequelize.define('BasicModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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

}, {
    tableName: 'basics',
    timestamps: true
});

module.exports = BasicModel;