const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const VideoModel = sequelize.define('VideoModel', {
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
    urlYoutube: {
        type: DataTypes.STRING,
        allowNull: true
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

}, {
    tableName: 'videos',
    timestamps: true
});

module.exports = VideoModel;