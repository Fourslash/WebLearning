class Controller {
    static simpleString(request, response, next) {
        response.send(`Hi, current time is ${new Date()}`);
    }

    static exceptionTest(request, response, next) {
        throw new Error('I am error');
    }
}

exports.Controller = Controller; 