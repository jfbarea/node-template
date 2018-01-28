'use strict';

// Dependencies

var db = require('../lib/database.js');

/**
* Database model
*/
module.exports = db.model('Scenario', {
  param1 : {type: String, default: null},
  param2 : Object,
});
