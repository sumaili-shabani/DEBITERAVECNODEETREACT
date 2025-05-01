const User = require('./User');
const Role = require('./Role');

User.belongsTo(Role, { foreignKey: 'idRole', as: 'role' });

module.exports = { User, Role };
