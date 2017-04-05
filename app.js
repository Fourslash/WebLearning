const APP_PORT = '3000';
const APP_HOSTNAME = '0.0.0.0'

const express = require('express');
const logger = require('morgan');
const router = require('./app/router').router;

const app = express();

app.use(logger('dev'));
app.use('/', router);

app.listen(APP_PORT, APP_HOSTNAME, () => {
    console.log(`Server started at ${APP_HOSTNAME}:${APP_PORT}`);
})
