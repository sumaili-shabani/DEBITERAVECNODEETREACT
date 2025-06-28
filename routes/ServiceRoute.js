const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_service',auth, ServiceController.fetchDatas);
router.get('/fetch_single_service/:id',auth, ServiceController.fetchSigleData);
router.post('/insert_service',auth, ServiceController.postData);
router.delete('/delete_service/:id',auth, ServiceController.deleteData);
router.get('/fetch_all_service', auth, ServiceController.fetchAllDatas);

module.exports = router;