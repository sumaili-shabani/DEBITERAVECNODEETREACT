const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // ton fichier sequelize.js

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    avatar: {
        type: DataTypes.STRING,
        defaultValue: 'avatar.png'
    },
    passwords: DataTypes.STRING,
    sexe: DataTypes.STRING,
    idRole: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
}, {
    tableName: 'users',
    timestamps: true
});


module.exports = User;
