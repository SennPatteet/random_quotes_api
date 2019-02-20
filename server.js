//require
const http = require('http');
const app = require('./app')

//PORT
const port = process.env.PORT || 3000;

//create server
const server = http.createServer(app);

//listen to server
server.listen(port);
