const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');
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
router.get('/fetch_team',auth, TeamController.fetchDatas);
router.get('/fetch_single_team/:id',auth, TeamController.fetchSigleData);
router.post('/insert_team',auth, TeamController.postData);
router.delete('/delete_team/:id',auth, TeamController.deleteData);
router.get('/fetch_all_team', auth, TeamController.fetchAllDatas);
router.post('/edit_team_logo', auth, upload.single('logo'), TeamController.editLogo);

router.get('/fetch_team_data', TeamController.fetchDatas);

module.exports = router;