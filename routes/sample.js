// var log = require('../lib/log.js');
const sample = require('../routes/sample.js');

exports.sampleGet =(req, res) => {
  sample.get(req.param1, req.param2, req.param3)
    .then((data) => res.send(data))
    .catch((error) => res.status(error.code).send(error.message));
};

exports.samplePost =(req, res) => {
  sample.post(req.param1, req.param2, req.param3)
    .then((data) => res.send(data))
    .catch((error) => res.status(error.code).send(error.message));
};

exports.samplePut =(req, res) => {
  sample.put(req.param1, req.param2, req.param3)
    .then((data) => res.send(data))
    .catch((error) => res.status(error.code).send(error.message));
};

exports.sampleDelete =(req, res) => {
  sample.delete(req.param1, req.param2, req.param3)
    .then((data) => res.send(data))
    .catch((error) => res.status(error.code).send(error.message));
};
