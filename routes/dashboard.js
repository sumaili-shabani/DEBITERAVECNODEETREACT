const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashBoardAdminController');
//appel à la protection des urls
const auth = require('../middlewares/auth');


router.get('/stats',auth, dashboardController.getStats);
// router.get('/export-excel', auth, exportDatabaseToExcel.exportDataToExcel);




module.exports = router;
