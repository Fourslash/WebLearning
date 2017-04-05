const controller = require('./controller').Controller;

const express = require('express');
const router = express.Router();
router.get('/simple-string', controller.simpleString);
router.get('/error', controller.exceptionTest);

exports.router = router;