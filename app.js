var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("servidor rodando");
});