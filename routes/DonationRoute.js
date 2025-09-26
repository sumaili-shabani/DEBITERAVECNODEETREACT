const express = require('express');
const router = express.Router();
const DonationCotroller = require('../controllers/DonationCotroller');
//appel à la protection des urls
const auth = require('../middlewares/auth');

// 🔹 Routes utilisateurs
router.post('/post_donation', DonationCotroller.sendDonationInfo);
router.post('/post_payout', DonationCotroller.sendPayout);
router.post('/chat', DonationCotroller.chatGpt);

module.exports = router;