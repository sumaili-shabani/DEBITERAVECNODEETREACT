const express = require('express');
const router = express.Router();
const BasicController = require('../controllers/BasicController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_basic',auth, BasicController.fetchDatas);
router.get('/fetch_single_basic/:id',auth, BasicController.fetchSigleData);
router.post('/insert_basic',auth, BasicController.postData);
router.delete('/delete_basic/:id',auth, BasicController.deleteData);
router.get('/fetch_all_basic', auth, BasicController.fetchAllDatas);

module.exports = router;