const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/VideoController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_video',auth, VideoController.fetchDatas);
router.get('/fetch_single_video/:id',auth, VideoController.fetchSigleData);
router.post('/insert_video',auth, VideoController.postData);
router.delete('/delete_video/:id',auth, VideoController.deleteData);
router.get('/fetch_all_video', auth, VideoController.fetchAllDatas);

module.exports = router;