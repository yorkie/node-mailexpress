
var util = require('util');

function MailResponse(context) {
	this._context = context;
}

MailResponse.prototype.sayOk = function(message) {
	var concatedStr = util.format('OK %s Completed %s', this._context._currentCommand, message||'');
  this._context._writeLine(concatedStr);
	this._context._send();
}

MailResponse.prototype.sayBad = function(message) {
	var concatedStr = util.format('BAD %s', message||'');
	this._context._writeLine(concatedStr);
	this._context._send();
}

MailResponse.prototype.sayNo = function(message) {
	var concatedStr = util.format('NO %s', message||'');
	this._context._writeLine(concatedStr);
	this._context._send();
}

// exports
exports.MailResponse = MailResponse;