exports.middleware = function(error, request, response, next) {
    if (error) {        
        console.error(error);
        response.status(500);
        response.send(error.message);
    } else {
        next();
    }
}