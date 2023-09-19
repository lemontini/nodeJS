// deps: global
const http = require('http');

// deps: local
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);
