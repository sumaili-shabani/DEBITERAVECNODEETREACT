const express = require('express');
const router = express.Router();
const OffreController = require('../controllers/OffreController');
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
router.get('/fetch_offre',auth, OffreController.fetchDatas);
router.get('/fetch_single_offre/:id',auth, OffreController.fetchSigleData);
router.post('/insert_offre',auth, OffreController.postData);
router.delete('/delete_offre/:id',auth, OffreController.deleteData);
router.get('/fetch_all_offre', auth, OffreController.fetchAllDatas);
router.post('/edit_offre_logo', auth, upload.single('logo'), OffreController.editLogo);

module.exports = router;