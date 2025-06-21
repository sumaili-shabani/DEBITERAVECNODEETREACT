const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_role',auth, RoleController.fetchRoles);
router.get('/fetch_single_role/:id',auth, RoleController.fetchSigleRoles);
router.post('/insert_role',auth, RoleController.postRole);
router.delete('/delete_role/:id',auth, RoleController.deleteRole);
router.get('/fetch_all_role', auth, RoleController.fetchAllRoles);



module.exports = router;
