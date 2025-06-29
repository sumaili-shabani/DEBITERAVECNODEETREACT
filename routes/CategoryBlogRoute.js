const express = require('express');
const router = express.Router();
const CategoryBlogController = require('../controllers/CategoryBlogController');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.get('/fetch_category_blog',auth, CategoryBlogController.fetchDatas);
router.get('/fetch_single_category_blog/:id',auth, CategoryBlogController.fetchSigleData);
router.post('/insert_category_blog',auth, CategoryBlogController.postData);
router.delete('/delete_category_blog/:id',auth, CategoryBlogController.deleteData);
router.get('/fetch_all_category_blog', auth, CategoryBlogController.fetchAllDatas);

module.exports = router;