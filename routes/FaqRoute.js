const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/FaqController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_faq',auth, FaqController.fetchDatas);
router.get('/fetch_single_faq/:id',auth, FaqController.fetchSigleData);
router.post('/insert_faq',auth, FaqController.postData);
router.delete('/delete_faq/:id',auth, FaqController.deleteData);
router.get('/fetch_all_faq', auth, FaqController.fetchAllDatas);

module.exports = router;