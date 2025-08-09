const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
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


router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/register_user', UserController.registerUser);

router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password', UserController.resetPassword);
//refresh-token
router.post('/refresh-token', UserController.refreshToken);

router.post('/contact_form', UserController.contactForm);





// 🔹 Routes utilisateurs
router.get('/fetch_user', auth, UserController.fetchUsers); // protégé par token
router.get('/fetch_single_user/:id', auth, UserController.fetchSingleUser);
router.post('/post_user', auth, UserController.postUser);
router.post('/editUserProfil', auth, UserController.editUserProfil);
router.post('/editUserPassword', auth, UserController.editPasswordProfil);

router.delete('/delete_user/:id', auth, UserController.deleteUser);
router.post('/edit_password', auth, UserController.editPassword);
router.post('/edit_avatar', auth, upload.single('avatar'), UserController.editAvatar);


module.exports = router;
