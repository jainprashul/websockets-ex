var express = require('express');
var socket = require('socket.io')

// app setup

var app = express();
var server = app.listen(4000, ()=> {
    console.log('listening to port 4000')
})

// satatic files
app.use(express.static('public'));

//socket setup()
var io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection');

    socket.on('chat', (data)=> {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    });
});

