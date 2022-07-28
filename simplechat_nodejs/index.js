const host = '127.0.0.1';
const port = 8888;

const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
