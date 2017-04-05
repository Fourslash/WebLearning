const controller = require('./controller').Controller;

const express = require('express');
const router = express.Router();
router.get('/simple-string', controller.simpleString);

exports.router = router;