
var util = require('util');

function MailResponse(context) {
  this._context = context;
}

MailResponse.prototype.sayOk = function(message) {
  var concatedStr = util.format('%s OK %s Completed %s', 
    this._context._currentTag,
    this._context._currentCommand, message||'');
  this._context._writeLine(concatedStr);
  this._context._send();
}

MailResponse.prototype.sayBad = function(message) {
  var concatedStr = util.format('%s BAD %s', 
    this._context._currentTag, message||'');
  this._context._writeLine(concatedStr);
  this._context._send();
}

MailResponse.prototype.sayNo = function(message) {
  var concatedStr = util.format('%s NO %s', 
    this._context._currentTag, message||'');
  this._context._writeLine(concatedStr);
  this._context._send();
}

// exports
exports.MailResponse = MailResponse;