const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const CategoryBlogModel = sequelize.define('CategoryBlogModel', {
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
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    tableName: 'categories',
    timestamps: true
});

module.exports = CategoryBlogModel;