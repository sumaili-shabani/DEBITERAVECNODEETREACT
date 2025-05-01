// models/User.js
const db = require('../db');

const User = {
    getAll: (page = 1, limit = 10, callback) => {
        const offset = (page - 1) * limit;
        const sql = 'SELECT * FROM users LIMIT ? OFFSET ?';
        db.query(sql, [parseInt(limit), parseInt(offset)], callback);
    },

    countAll: (callback) => {
        db.query('SELECT COUNT(*) as total FROM users', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },

    insert: (user, callback) => {
        const sql = 'INSERT INTO users (name, email, telephone, avatar, passwords, idRole, sexe) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.name, user.email, user.telephone, user.avatar, user.passwords, user.idRole, user.sexe];
        db.query(sql, values, callback);
    },

    update: (user, callback) => {
        const sql = 'UPDATE users SET name=?, email=?, telephone=?, avatar=?, idRole=?, sexe=? WHERE id=?';
        const values = [user.name, user.email, user.telephone, user.avatar, user.idRole, user.sexe, user.id];
        db.query(sql, values, callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id=?', [id], callback);
    },

    updatePassword: (id, hashedPassword, idRole, callback) => {
        db.query('UPDATE users SET passwords=?, idRole=? WHERE id=?', [hashedPassword, idRole, id], callback);
    },

    updateAvatar: (id, avatar, callback) => {
        db.query('UPDATE users SET avatar=? WHERE id=?', [avatar, id], callback);
    }
};

module.exports = User;
