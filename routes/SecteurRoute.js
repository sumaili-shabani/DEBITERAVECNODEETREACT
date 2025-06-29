const express = require('express');
const router = express.Router();
const SecteurController = require('../controllers/SecteurController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_secteur',auth, SecteurController.fetchDatas);
router.get('/fetch_single_secteur/:id',auth, SecteurController.fetchSigleData);
router.post('/insert_secteur',auth, SecteurController.postData);
router.delete('/delete_secteur/:id',auth, SecteurController.deleteData);
router.get('/fetch_all_secteur', auth, SecteurController.fetchAllDatas);

module.exports = router;