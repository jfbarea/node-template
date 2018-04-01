exports.filterArray = (arr, keys) => {
  return arr.map((elem)=>{
    return exports.filterObj(elem, keys);
  });
};

exports.generateRandomID = () => {
  let current_date = (new Date()).valueOf().toString();
  let random = Math.random().toString();
  return crypto.createHash('sha1').update(current_date + random).digest('hex');
};

exports.simulateError = () => {
  return Math.random() > 0.5;
};
