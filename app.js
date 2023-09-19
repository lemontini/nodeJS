// deps: global
// const http = require('http');
import http from 'http';

// deps: local
// const routes = require('./routes');
import { requestHandler } from './routes.js';

const server = http.createServer(requestHandler);

server.listen(3000);
