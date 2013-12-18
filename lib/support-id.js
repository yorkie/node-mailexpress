

var Command = require('./command').Command;
var util = require('util');

function IdSupport() {
  Command.call(this, 'Capability');
}

IdSupport.prototype._parse = function(message) {
  return message;
}

IdSupport.prototype._request = function(callback) {
  // TODO
  return callback(null, 'OK');
}

util.inherits(IdSupport, Command);

module.exports = IdSupport;
