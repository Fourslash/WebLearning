
const service = require('./service').Service;

class Controller {
    /**
     * @api {get} /strings Get string array
     * @apiName GetStrings
     * @apiGroup StringArray
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  ["foo","bar"]
     *
     */
    static getStrings(request, response, next) {
        const strings = service.list();
        response.send(strings);
    }

    /**
     * @api {post} /strings Add string to array
     * @apiName AddString
     * @apiGroup StringArray
     * @apiParam {string/string[]} addedString
     * @apiParamExample cURL request example
     *  curl -XPOST -H "Content-type: application/json" -d '{"addedString": "qwe"}' 'http://127.0.0.1:3000/strings'
     * @apiError (400) WrongParametr 'Expected "addedString" param in request body'
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 201 OK
     *
     */
    static addString(request, response, next) {
        const string = request.body.addedString;
        if (!string) {
            response.status(400)
            response.send('Expected "addedString" param in request body');
        } else {
            service.add(string);
            response.status(201);
            response.end();
        }
    }

    /**
     * @api {delete} /strings Delete string from array
     * @apiName Delete string
     * @apiGroup StringArray
     * @apiParam {string} deletedString
     * @apiParamExample cURL string
     *  curl -XDELETE -H "Content-type: application/json" -d '{"deletedString": "bar"}' 'http://127.0.0.1:3000/strings'
     * @apiError (400) WrongParametr 'Expected "deletedString" param in request body'
     * @apiError (404) NotFound 'There is no element ${string} in array'
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     */
    static deleteString(request, response, next) {
        const string = request.body.deletedString;
        if (!string) {
            response.status(400)
            response.send('Expected "deletedString" param in request body');
        } else {
            const isRemoved = service.remove(string);
            if (isRemoved) {
                response.status(204);
                response.end();
            } else {
                response.status(404);
                response.send(`There is no element ${string} in array`);                
            }
        }
    }



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