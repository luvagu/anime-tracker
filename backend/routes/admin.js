const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/edit-anime', adminController.getEditAnime);

router.post('/add-anime', adminController.postAnime);

module.exports = router;
