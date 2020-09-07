const express = require("express");
const app = express();
const http = require('http').createServer();
const io = require("socket.io")(http);

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    socket.emit('welcome', 'hello')
});

http.listen(PORT, () => {
    console.log('server running on ' + PORT);
});

