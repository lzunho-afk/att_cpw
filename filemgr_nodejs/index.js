const express = require('express');
const app = express();

const http = require('http');
const host = '127.0.0.1';
const port = 8888;

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html';
});

io.on('connection', (socket) => {
    console.log('a user connected to i/o socket');

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running on http://${host}:${port}/`);
});

