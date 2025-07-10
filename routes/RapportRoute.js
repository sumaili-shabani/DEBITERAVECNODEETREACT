const express = require('express');
const router = express.Router();
const RapportController = require('../controllers/RapportController');
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
router.get('/fetch_rapport',auth, RapportController.fetchDatas);
router.get('/fetch_single_rapport/:id',auth, RapportController.fetchSigleData);
router.post('/insert_rapport',auth, RapportController.postData);
router.delete('/delete_rapport/:id',auth, RapportController.deleteData);
router.get('/fetch_all_rapport', auth, RapportController.fetchAllDatas);
router.post('/edit_rapport_logo', auth, upload.single('logo'), RapportController.editLogo);

//par slug
router.get('/fetch_single_rapport_by_slug/:slug', auth, RapportController.fetchDatasBySlug);

module.exports = router;