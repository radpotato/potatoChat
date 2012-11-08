var http = require('http'),
    fs = require('fs'),
listener = function(req, res) {
	fs.readFile('./viewer/chat.html', function(err, data) { 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
},
server = http.createServer(listener);
server.listen(process.env.PORT || 3000, '127.0.0.1');

console.log('your node server running at http://127.0.0.1:3000');
