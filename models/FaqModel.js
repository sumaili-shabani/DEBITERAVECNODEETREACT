const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const FaqModel = sequelize.define('FaqModel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    question: {
        type: DataTypes.STRING,
        allowNull: true
    },

    reponse: {
        type: DataTypes.TEXT,
        allowNull: true
    },
   

}, {
    tableName: 'faqs',
    timestamps: true
});

module.exports = FaqModel;