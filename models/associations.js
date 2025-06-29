const User = require('./User');
const Role = require('./Role');
const BlogModel = require('./BlogModel');
const CategoryBlogModel = require('./CategoryBlogModel');
const ProjetModel = require('./ProjetModel');
const SecteurModel = require('./SecteurModel');

User.belongsTo(Role, { foreignKey: 'idRole', as: 'role' });
BlogModel.belongsTo(CategoryBlogModel, { foreignKey: 'idCategory', as: 'category_blog' });
ProjetModel.belongsTo(SecteurModel, { foreignKey: 'idSecteur', as: 'secteur_projet' });

module.exports = { User, Role, BlogModel, CategoryBlogModel, ProjetModel, SecteurModel };
