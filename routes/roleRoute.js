const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Routes CRUD pour les rôles
router.get('/', roleController.fetchRoles); // Récupérer tous les rôles avec pagination et recherche
router.get('/:id', roleController.fetchSigleRoles); // Récupérer un rôle spécifique
router.post('/', roleController.postRole); // Créer un nouveau rôle
router.put('/:id', roleController.postRole); // Modifier un rôle existant
router.delete('/:id', roleController.deleteRole); // Supprimer un rôle

module.exports = router;
