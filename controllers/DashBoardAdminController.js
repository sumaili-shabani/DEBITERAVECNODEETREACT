const { User, Role, CategoryBlogModel, BlogModel, ProjetModel, SecteurModel } = require('../models/associations');

const { Op, fn, col } = require('sequelize');

// 🧮 Compter les utilisateurs par sexe
async function countBySexe(sexe) {
    return await User.count({ where: { sexe } });
}

// 🧮 Compter les utilisateurs par rôle (par ex. "Admin", "Utilisateur")
async function countByRoleName(roleName) {
    const role = await Role.findOne({ where: { nom: roleName } });
    if (!role) return 0;

    return await User.count({ where: { idRole: role.id } });
}

// 🔹 Statistiques groupées par rôle
async function countUsersGroupedByRole() {
    return await User.findAll({
        attributes: [
            'idRole',
            [fn('COUNT', col('User.idRole')), 'value']
        ],
        include: [
            {
                model: Role,
                as: 'role',
                attributes: [['nom', 'category']]
            }
        ],
        group: ['User.idRole', 'role.id'],
        raw: true,
        nest: true
    });
}

/*
*
*==========================================
* Statistique blog
*==========================================
*
*/

// 🔹 Statistiques groupées par categorie
async function countBlogGroupedCategory() {
    return await BlogModel.findAll({
        attributes: [
            'idCategory',
            [fn('COUNT', col('BlogModel.idCategory')), 'value']
        ],
        include: [
            {
                model: CategoryBlogModel,
                as: 'category_blog',
                attributes: [
                    'titre',
                    ['titre', 'category'] // ✅ Renomme 'titre' en 'category'
                ]
            }
        ],
        group: ['BlogModel.idCategory', 'category_blog.id'],
        raw: true,
        nest: true
    });
}

// 🔹 Statistiques groupées par secteur de projet
async function countProjetGroupedSecteur() {
    return await ProjetModel.findAll({
        attributes: [
            'idSecteur',
            [fn('COUNT', col('ProjetModel.idSecteur')), 'value']
        ],
        include: [
            {
                model: SecteurModel,
                as: 'secteur_projet',
                attributes: [
                    'nomSecteur',
                    ['nomSecteur', 'category'] // ✅ Renomme 'nomSecteur' en 'category'
                ]
            }
        ],
        group: ['ProjetModel.idSecteur', 'secteur_projet.id'],
        raw: true,
        nest: true
    });
}


// ✅ Fonction principale : Statistiques Dashboard
exports.getStats = async (req, res) => {
    try {
        const [
            nbM,
            nbF,
            totalUsers,
            totalRoles,
            nbAdmin,
            nbUtilisateurs,
            usersByRole,
            blogByCategory,
            projetBySecteur,
        ] = await Promise.all([
            countBySexe('M'),
            countBySexe('F'),
            User.count(),
            Role.count(),
            countByRoleName('Admin'),
            countByRoleName('Utilisateur'),
            countUsersGroupedByRole(),

            countBlogGroupedCategory(),
            countProjetGroupedSecteur(),
        ]);

        // console.log(JSON.stringify(usersByRole));

        // 📊 Formater les données pour chart
        const chartData = {
            category: usersByRole.map(item => item.role.category),
            value: usersByRole.map(item => parseInt(item.value))
        };

        // 📊 Formater les données pour chart des blogs
        const chartBlogData = {
            category: blogByCategory.map(item => item.category_blog.category),
            value: blogByCategory.map(item => parseInt(item.value))
        };

        // 📊 Formater les données pour chart des projets
        const chartProjetData = {
            category: projetBySecteur.map(item => item.secteur_projet.category),
            value: projetBySecteur.map(item => parseInt(item.value))
        };
        



        const stats = {
            data: [
                {
                    nombreUtilisateurM: nbM,
                    nombreUtilisateurF: nbF,
                    nombreTotalUtilisateur: totalUsers,
                    nombreTotalRole: totalRoles,
                    nombreAdmin: nbAdmin,
                    nombreUtilisateur: nbUtilisateurs,
                    chartSexeData: {
                        category: ['M', 'F'],
                        value: [nbM, nbF]
                    },
                    chartData,
                    chartBlogData,
                    chartProjetData,

                }
            ]
        };

        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json({
            error: 'Erreur lors de la récupération des statistiques',
            detail: err.message
        });
    }
};



