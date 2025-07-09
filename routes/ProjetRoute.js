const express = require('express');
const router = express.Router();
const ProjetController = require('../controllers/ProjetController');
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
router.get('/fetch_projet',auth, ProjetController.fetchDatas);
router.get('/fetch_single_projet/:id',auth, ProjetController.fetchSigleData);
router.post('/insert_projet',auth, ProjetController.postData);
router.delete('/delete_projet/:id',auth, ProjetController.deleteData);
router.get('/fetch_all_projet', auth, ProjetController.fetchAllDatas);
router.post('/edit_projet_logo', auth, upload.single('logo'), ProjetController.editLogo);

module.exports = router;