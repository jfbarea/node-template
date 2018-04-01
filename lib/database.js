'use strict';

// Dependencies

let mongoose = require('mongoose');
let settings = require('../settings.js');

// Database connection

console.log(`Connecting Mongoose to "${settings.MONGO_URI}"...`);

let db = mongoose.connect(settings.MONGO_URI).connection;

db.on('error', function(error) {
  console.log(`Cannot connect Mongoose. Error: ${error}`);
});
db.once('open', function () {
  console.log('Mongoose connection stablished successfully. Database ready!');
});

// Exports

module.exports = mongoose;
