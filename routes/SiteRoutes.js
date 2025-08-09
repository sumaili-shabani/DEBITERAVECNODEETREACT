const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/SiteController');
/*
*
*==============================
* Ajout des upload des images
*==============================
*
*/
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
/*
*
*==============================
* Fin Ajout des upload images
*==============================
*
*/



// 🔹 Routes 
router.get('/fetch_site', auth, SiteController.fetchSites);
router.get('/fetch_single_site/:id', auth, SiteController.fetchSigleSites);
router.post('/insert_site', auth, SiteController.postSite);
router.delete('/delete_site/:id', auth, SiteController.deleteSite);
router.post('/edit_site_logo', auth, upload.single('logo'), SiteController.editLogo);

router.get('/fetch_data_site', SiteController.fetchDataSite);

module.exports = router;