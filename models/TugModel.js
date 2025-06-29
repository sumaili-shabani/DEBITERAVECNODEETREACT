const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const TugModel = sequelize.define('TugModel', {
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
    

}, {
    tableName: 'tugs',
    timestamps: true
});

module.exports = TugModel;