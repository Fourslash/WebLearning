const lodash = require('lodash');

// lets pretend its database
let someStrings = ['foo', 'bar'];

class Service {

    /**
     * 
     * @param {string | string[]} value 
     */
    static add(value) {        
        someStrings = someStrings.concat(value);
    }

    /**
     * @return {string[]}
     */
    static list() {
        return someStrings;
    }

    /**
     * @param {string} value
     * @return {boolean} - is string deleted
     */
    static remove(value) {
        console.log(someStrings, value);
        const removed = lodash.remove(someStrings, (string) => string == value);
        return removed.length > 0;
    }

}

exports.Service = Service;