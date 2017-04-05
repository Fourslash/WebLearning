class Controller {
    /**
     * @api {get} /simple-string Request User information
     * @apiName SimpleString
     * @apiGroup Examples
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     * "Hi, current time is Thu Apr 06 2017 00:01:08 GMT+0300 (Russian Standard Time)"
     *
     */
    static simpleString(request, response, next) {
        response.send(`Hi, current time is ${new Date()}`);
    }

    /**
     * @api {get} /error Error handling example
     * @apiName ErrorHandle
     * @apiGroup Examples
     *
     * @apiError (500) SomethingWentWrong Error example.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 
     *     {
     *       "code": "SomethingWentWrong",
     *       "message": "simple error message"
     *     }
     */
    static exceptionTest(request, response, next) {
        throw new Error('I am error');
    }
}

exports.Controller = Controller; 