const { User, Role } = require('../models/associations');
const { Op } = require('sequelize');

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

// ✅ Fonction principale : Statistiques Dashboard
exports.getStats = async (req, res) => {
    try {
        const [nbM, nbF, totalUsers, totalRoles, nbAdmin, nbUtilisateurs] = await Promise.all([
            countBySexe('M'),
            countBySexe('F'),
            User.count(),
            Role.count(),
            countByRoleName('Admin'),
            countByRoleName('Utilisateur'),
        ]);

        const stats = {
            data: [
                {
                    nombreUtilisateurM: nbM,
                    nombreUtilisateurF: nbF,
                    nombreTotalUtilisateur: totalUsers,
                    nombreTotalRole: totalRoles,
                    nombreAdmin: nbAdmin,
                    nombreUtilisateur: nbUtilisateurs,
                    chartData: {
                        category: ['M', 'F'],
                        value: [nbM, nbF]
                    }
                }
            ]
        };

        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des statistiques', detail: err.message });
    }
};