const express = require('express');
const router = express.Router();
const TugController = require('../controllers/TugController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_tug',auth, TugController.fetchDatas);
router.get('/fetch_single_tug/:id',auth, TugController.fetchSigleData);
router.post('/insert_tug',auth, TugController.postData);
router.delete('/delete_tug/:id',auth, TugController.deleteData);
router.get('/fetch_all_tug', auth, TugController.fetchAllDatas);

module.exports = router;