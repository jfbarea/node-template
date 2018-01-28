const sample = require('./sample.js');
const constants = require('../constants.js');
var routes = [
  {
    path: '/sample-get',
    route: sample.sampleGet,
    method: constants.GET
  },
  {
    path: '/sample-post',
    route: sample.samplePost,
    method: constants.POST
  },
  {
    path: '/sample-PUT',
    route: sample.samplePut,
    method: constants.PUT
  },
  {
    path: '/sample-post',
    route: sample.sampleDelete,
    method: constants.DELETE
  },
];
exports.index = routes;
