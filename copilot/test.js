// Express server on port 3000
// Run with: node test.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
} );



io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });
});

server.listen(3000);

// Return the current time

function sendTime() {
    var time = new Date();
    io.sockets.emit('time', time.toString());
    console.log("Time sent: " + time.toString());
}   

sendTime();






