exports.middleware = function(request, response, next) {
    const error = {
        method: request.method,
        url: request.url,
        message: 'Route not found'
    };
    response.status(404);
    response.send(error);
}