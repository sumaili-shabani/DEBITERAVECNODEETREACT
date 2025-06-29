const express = require('express');
const router = express.Router();
const RealisationController = require('../controllers/RealisationController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

/*
*
*==============================
* Ajout des upload des images
*==============================
*
*/
const multer = require('multer');
const path = require('path');

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
/*
*
*==============================
* Fin Ajout des upload images
*==============================
*
*/

// 🔹 Routes utilisateurs
router.get('/fetch_realisation',auth, RealisationController.fetchDatas);
router.get('/fetch_single_realisation/:id',auth, RealisationController.fetchSigleData);
router.post('/insert_realisation',auth, RealisationController.postData);
router.delete('/delete_realisation/:id',auth, RealisationController.deleteData);
router.get('/fetch_all_realisation', auth, RealisationController.fetchAllDatas);
router.post('/edit_realisation_logo', auth, upload.single('logo'), RealisationController.editLogo);

module.exports = router;