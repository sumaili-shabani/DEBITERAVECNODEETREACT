const express = require('express');
const router = express.Router();
const CarouselController = require('../controllers/CarouselController');
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
router.get('/fetch_carousel',auth, CarouselController.fetchDatas);
router.get('/fetch_single_carousel/:id',auth, CarouselController.fetchSigleData);
router.post('/insert_carousel',auth, CarouselController.postData);
router.delete('/delete_carousel/:id',auth, CarouselController.deleteData);
router.get('/fetch_all_carousel', auth, CarouselController.fetchAllDatas);
router.post('/edit_carousel_logo', auth, upload.single('logo'), CarouselController.editLogo);

router.get('/fetch_carousel_data',  CarouselController.fetchDatas);

module.exports = router;