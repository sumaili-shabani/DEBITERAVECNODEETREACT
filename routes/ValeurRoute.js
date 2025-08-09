const express = require('express');
const router = express.Router();
const ValeurController = require('../controllers/ValeurController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_valeur',auth, ValeurController.fetchDatas);
router.get('/fetch_single_valeur/:id',auth, ValeurController.fetchSigleData);
router.post('/insert_valeur',auth, ValeurController.postData);
router.delete('/delete_valeur/:id',auth, ValeurController.deleteData);
router.get('/fetch_all_valeur', auth, ValeurController.fetchAllDatas);

router.get('/fetch_valeur_data', ValeurController.fetchDatas);

module.exports = router;