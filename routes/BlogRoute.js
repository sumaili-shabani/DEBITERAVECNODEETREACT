const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');
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
router.get('/fetch_blog',auth, BlogController.fetchDatas);
router.get('/fetch_single_blog/:id',auth, BlogController.fetchSigleData);
router.post('/insert_blog',auth, BlogController.postData);
router.delete('/delete_blog/:id',auth, BlogController.deleteData);
router.get('/fetch_all_blog', auth, BlogController.fetchAllDatas);
router.post('/edit_blog_logo', auth, upload.single('logo'), BlogController.editLogo);
router.get('/check_status_blog/:id', auth, BlogController.editStatus);


router.get('/fetch_blog_data', BlogController.fetchDatas);
router.get('/fetch_blog_by_category_slug/:slug', BlogController.fetchCategoryBlogBySlug);
//par slug
router.get('/fetch_single_blog_by_slug/:slug', BlogController.fetchDatasBySlug);





module.exports = router;