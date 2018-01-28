exports.filterArray = (arr, keys) => {
  return arr.map((elem)=>{
    return exports.filterObj(elem, keys);
  });
};

exports.generateRandomID = () => {
  var current_date = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  return crypto.createHash('sha1').update(current_date + random).digest('hex');
};

exports.simulateError = () => {
  return Math.random() > 0.5;
};
