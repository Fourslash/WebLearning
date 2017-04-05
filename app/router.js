const controller = require('./controller').Controller;

const express = require('express');
const router = express.Router();
router.get('/simple-string', controller.simpleString);
router.get('/error', controller.exceptionTest);
router.get('/strings', controller.getStrings);
router.post('/strings', controller.addString);
router.delete('/strings', controller.deleteString);

exports.router = router;