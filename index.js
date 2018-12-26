var express = require('express');

// app setup

var app = express();
var server = app.listen(4000, ()=> {
    console.log('listening to port 4000')
})

// satatic files
app.use(express.static('public'));