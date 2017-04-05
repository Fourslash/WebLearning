class Controller {
    static simpleString(request, response, next) {
        response.send(`Hi, current time is ${new Date()}`);
    }
}

exports.Controller = Controller; 