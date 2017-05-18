var request = require('request');
var qs = require('querystring');

var _post = function (data, callback) {
    this.options.form = qs.stringify(data);
    request.post(this.options, function (err, res, body) {
        if (err) {
            printError(err);
            callback(err);
        }

        else callback(null, body);
    });
};

var _get = function (callback) {
    request.get(this.options, function (err, res, body) {
        if (err) {
            printError(err);
            callback(err);
        }
        else callback(null, body);
    });
};

var Service = function (path) {
    this.options = {
        url: 'http://localhost:4444' + path
    }
};

Service.prototype = {
    post: _post,
    get: _get
};
module.exports = Service;