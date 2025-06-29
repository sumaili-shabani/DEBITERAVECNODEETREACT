const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BlogModel = sequelize.define('BlogModel', {
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

    idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },



}, {
    tableName: 'blogs',
    timestamps: true
});

module.exports = BlogModel;