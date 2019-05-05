"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(socket, name) {
        if (name === void 0) { name = 'anonymous'; }
        this.socket = socket;
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSocket = function () {
        return this.socket;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
exports.User = User;
