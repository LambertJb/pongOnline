"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer(second) {
        if (second === void 0) { second = 0; }
        this.second = second;
    }
    Timer.prototype.startTimer = function () {
        this.second++;
        console.log(this.second);
        setTimeout(this.startTimer.bind(this), 1000);
    };
    Timer.prototype.getSecond = function () {
        return this.second;
    };
    return Timer;
}());
exports.Timer = Timer;
