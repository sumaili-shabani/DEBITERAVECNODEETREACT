const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BasicModel = sequelize.define('BasicModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    apropos: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    travail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    don: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    structuregestion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    financement: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    carriere: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    partenariat: {
        type: DataTypes.TEXT,
        allowNull: true
    },


}, {
    tableName: 'basic_info',
    timestamps: true
});

module.exports = BasicModel;