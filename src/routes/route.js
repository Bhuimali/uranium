const express = require('express');
const Controller = require('../controllers/allController')
const router = express.Router();
router.get('/routeRequest',Controller.status);
module.exports = router;