const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const {user} = socket.handshake.query;
    connectedUsers[user] = socker.io;
});

mongoose.connect('mongodb://localhost:27017/oministack8', {
    useNewUrlParser: true
})

app.use((req, resp, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(3333);

