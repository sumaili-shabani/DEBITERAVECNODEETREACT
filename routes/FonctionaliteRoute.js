const express = require('express');
const router = express.Router();
const FonctionaliteController = require('../controllers/FonctionaliteController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_fonctionalite',auth, FonctionaliteController.fetchDatas);
router.get('/fetch_single_fonctionalite/:id',auth, FonctionaliteController.fetchSigleData);
router.post('/insert_fonctionalite',auth, FonctionaliteController.postData);
router.delete('/delete_fonctionalite/:id',auth, FonctionaliteController.deleteData);
router.get('/fetch_all_fonctionalite', auth, FonctionaliteController.fetchAllDatas);

module.exports = router;