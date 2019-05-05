"use strict";
exports.__esModule = true;
var Timer_1 = require("./class/Timer");
var server = require('http').createServer();
var app = require('express')();
var socket = require('socket.io')(server);
var timer = new Timer_1.Timer();
timer.startTimer();
socket.on('connect', function (client) {
    client.on('disconnect', function () {
        console.log('disconnect');
    });
});
console.log('Server listen port 3000');
server.listen(3000);
