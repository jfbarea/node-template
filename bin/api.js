/*global __dirname*/
//Requires

const express = require('express');
const path = require('path');
const http = require('http');
const routes = require('../routes/index.js');
const settings = require('../settings.js');
const log = require('../lib/log.js');
let app = express();

// Basic configuration
app.set('port', settings.PORT);

// Static files
app.use(express.static(path.join(__dirname, settings.FRONT_PATH)));

routes.index.forEach((route) => {
  try {
    app[route.method](route.path, route.route);
  } catch (e) {
    log.warn(`Route from path ${route.path} missing`);
  }
});

// Server creation

let port = app.get('port');
let server = http.createServer(app);
server.on('connection', (socket) => {socket.setTimeout(1000 * 60 * 60);});
server.listen(port, () => {
  console.log(`Running on port number: ${port}`);
});
