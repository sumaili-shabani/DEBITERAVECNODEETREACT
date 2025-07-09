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
        defaultValue:'logo.png',
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
    tug: {
        type: DataTypes.STRING,
        allowNull: true

    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false

    },



}, {
    tableName: 'blogs',
    timestamps: true
});

module.exports = BlogModel;