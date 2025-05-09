const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const PasswordReset = sequelize.define('PasswordReset', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE
}, {
    tableName: 'password_resets',
    timestamps: true
});


module.exports = PasswordReset;