const express = require('express');
const router = express.Router();
const GaleryController = require('../controllers/GaleryController');
const multer = require('multer');
const path = require('path');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 📁 Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'upload', 'images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });


// 🔹 Routes utilisateurs
router.get('/fetch_galery',auth, GaleryController.fetchDatas);
router.get('/fetch_single_galery/:id',auth, GaleryController.fetchSigleData);
router.post('/insert_galery', auth, upload.single('avatar'), GaleryController.postData);
router.delete('/delete_galery/:id',auth, GaleryController.deleteData);
router.get('/fetch_all_galery', auth, GaleryController.fetchAllDatas);
router.post('/edit_galery_logo', auth, upload.single('avatar'), GaleryController.editLogo);

router.get('/fetch_galery_data', GaleryController.fetchDatas);


module.exports = router;