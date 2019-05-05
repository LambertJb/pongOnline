import {Timer} from './class/Timer';

const server = require('http').createServer();
const app = require('express')();
const socket = require('socket.io')(server);

const timer = new Timer();

timer.startTimer();

socket.on('connect', client => {
  client.on('disconnect', () => {
      console.log('disconnect');
  });
});

console.log('Server listen port 3000');
server.listen(3000);
