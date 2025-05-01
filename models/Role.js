const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: DataTypes.STRING
}, {
    tableName: 'roles',
    timestamps: true
});


module.exports = Role;

