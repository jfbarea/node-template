const util = require('../lib/util.js');

exports.get = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    let error = util.simulateError();
    if(error) return reject('error');
    return resolve('sample');
  });
};

exports.post = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    let error = util.simulateError();
    if(error) return reject('error');
    return resolve('sample');
  });
};

exports.put = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    let error = util.simulateError();
    if(error) return reject('error');
    return resolve('sample');
  });
};

exports.delete = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    let error = util.simulateError();
    if(error) return reject('error');
    return resolve('sample');
  });
};
