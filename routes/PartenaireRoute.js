const express = require('express');
const router = express.Router();
const PartenaireController = require('../controllers/PartenaireController');
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
router.get('/fetch_partenaire', auth, PartenaireController.fetchDatas);
router.get('/fetch_single_partenaire/:id', auth, PartenaireController.fetchSigleData);
router.post('/insert_partenaire', auth, PartenaireController.postData);
router.delete('/delete_partenaire/:id', auth, PartenaireController.deleteData);
router.get('/fetch_all_partenaire', auth, PartenaireController.fetchAllDatas);
router.post('/edit_partenaire_logo', auth, upload.single('logo'), PartenaireController.editLogo);

module.exports = router;
