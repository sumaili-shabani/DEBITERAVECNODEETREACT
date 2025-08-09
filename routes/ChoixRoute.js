const express = require('express');
const router = express.Router();
const ChoixController = require('../controllers/ChoixController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_choix',auth, ChoixController.fetchDatas);
router.get('/fetch_single_choix/:id',auth, ChoixController.fetchSigleData);
router.post('/insert_choix',auth, ChoixController.postData);
router.delete('/delete_choix/:id',auth, ChoixController.deleteData);
router.get('/fetch_all_choix', auth, ChoixController.fetchAllDatas);

router.get('/fetch_choix_data', ChoixController.fetchDatas);

module.exports = router;