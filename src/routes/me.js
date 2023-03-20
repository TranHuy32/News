const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

//newController.index
router.get('/stored/news', meController.storedNewses);
router.get('/trash/news', meController.trashNewses);

module.exports = router;
