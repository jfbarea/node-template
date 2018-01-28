'use strict';

// Dependencies

var mongoose = require('mongoose');
var settings = require('../settings.js');

// Database connection

console.log(`Connecting Mongoose to "${settings.MONGO_URI}"...`);

var db = mongoose.connect(settings.MONGO_URI).connection;

db.on('error', function(error) {
  console.log(`Cannot connect Mongoose. Error: ${error}`);
});
db.once('open', function () {
  console.log('Mongoose connection stablished successfully. Database ready!');
});

// Exports

module.exports = mongoose;
