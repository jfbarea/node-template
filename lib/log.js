const settings = require('../settings.js');
const fs = require('fs');
exports.error = (msg, exp, user) => {
	if(!exp) exp = 'general';
	let log = formatLog(msg, exp, user, 'ERROR');
	let path = `${settings.LOG_PATH}${exp}.log`;
	fs.writeFile(path, log, { flag: 'a' },  (err) => {
		if (err) throw err;
		console.log(log);
	});
};
exports.warn = (msg, exp, user) => {
	if(!exp) exp = 'general';
	let log = formatLog(msg, exp, user, 'INFO');
	let path = `${settings.LOG_PATH}${exp}.log`;
	fs.writeFile(path, log, { flag: 'a' },  (err) => {
		if (err) throw err;
		console.log(log);
	});
};
exports.info = (msg, exp, user) => {
	if(!exp) exp = 'general';
	let log = formatLog(msg, exp, user, 'INFO');
	let path = `${settings.LOG_PATH}${exp}.log`;
	fs.writeFile(path, log, { flag: 'a' },  (err) => {
		if (err) throw err;
		console.log(log);
	});
};
exports.debug = (msg) => {
	if (settings.DEBUG) console.log('DEBUG', msg);
};
//2017-01-17T10:15:23.325Z ERROR general EXP\usuario11 MESSAGE
let formatLog = (msg, exp, user, type) => {
	msg = msg.toUpperCase();
	if(!user) user = 'nouser';
	let date = new Date().toISOString();
	return`${date} ${exp} ${user} ${type} ${msg} \n`;
};
