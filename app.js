const APP_PORT = '3000';
const APP_HOSTNAME = '0.0.0.0'

const express = require('express');
const logger = require('morgan');
const router = require('./app/router').router;

const unhandledRejectionHandler = 
    require('./app/error-handling/UnhandledRejection').middleware;
const routeNotFoundHandler = 
    require('./app/error-handling/404').middleware;

const app = express();

app.use(logger('dev'));
app.use('/', router);
app.use(unhandledRejectionHandler);
app.use(routeNotFoundHandler);
app.listen(APP_PORT, APP_HOSTNAME, () => {
    console.log(`Server started at ${APP_HOSTNAME}:${APP_PORT}`);
})
