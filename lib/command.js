
var util = require('util');

function Command(context, message) {
  this._context = context;
  this._response = context._response;
  var params = this._params = this._parse(message);
  if (params){ this._request(params) };
}

Command.prototype._parse = function() {
  console.log('Please implement this function for parsing the specified message format');
}

Command.prototype._request = function() {
  console.log('Please implement this function for doing actual content.');
}

function genRegexp(list) {
  if (!util.isArray(list)) {
    throw new Error('the command list must be an arrya');
  };
  return new RegExp(('^(\\w+) ('+ list.reduce(function(prev, next) {
    return prev + '|' + next;
  })+')'), 'i');
}

exports.Command = Command;
exports.supports = {
  'capability': require('./support-capability'),
  'login': require('./support-login'),
  'logout': require('./support-logout'),
  'select': require('./support-select'),
  'id': require('./support-id'),
  'idle': require('./support-idle')
}

exports.reg = genRegexp(Object.keys(exports.supports));