"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var user_class_1 = require("./user.class");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(socket, name, id, score, position) {
        if (score === void 0) { score = 0; }
        if (position === void 0) { position = { top: 0, left: 0 }; }
        var _this = _super.call(this, socket, name) || this;
        _this.score = score;
        _this.id = id;
        _this.position = position;
        return _this;
    }
    Player.prototype.getScore = function () {
        return this.score;
    };
    Player.prototype.incrementScore = function () {
        this.score++;
    };
    Player.prototype.getId = function () {
        return this.id;
    };
    return Player;
}(user_class_1.User));
exports.Player = Player;
