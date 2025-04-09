const express = require('express');
const router = express.Router();
const receiverController = require('../controllers/receiver');

router.post('/receiver', receiverController.handleData);

module.exports = router;