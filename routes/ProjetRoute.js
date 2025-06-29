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
router.get('/fetch_blog',auth, ProjetController.fetchDatas);
router.get('/fetch_single_blog/:id',auth, ProjetController.fetchSigleData);
router.post('/insert_blog',auth, ProjetController.postData);
router.delete('/delete_blog/:id',auth, ProjetController.deleteData);
router.get('/fetch_all_blog', auth, ProjetController.fetchAllDatas);
router.post('/edit_blog_logo', auth, upload.single('logo'), ProjetController.editLogo);

module.exports = router;