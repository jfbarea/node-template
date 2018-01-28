/*global describe, it, before, after */
'use strict';
const request = require('supertest');
const settings = require('../settings.js');
// const util = require('../lib/util.js');
require('mocha');
require('should');
require('winston');
require('assert');
var SERVER = 'http://localhost:' + settings.PORT;
describe('Sample Functions --', function() {
  this.timeout(60 * 5 * 1000);
  it('SAMPLE GET', function (done){
    this.timeout(60 * 5 * 1000);
    request(SERVER)
      .put('/api/sample-get')
      .expect(200)
      .end((error, response) => {
        if (error) throw error;
        console.log(response);
        done();
      });
  });
});
