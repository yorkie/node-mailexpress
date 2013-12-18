

var Command = require('./command').Command;
var util = require('util');

function IdleSupport() {
  Command.call(this, 'Capability');
}

IdleSupport.prototype._parse = function(message) {
  return message;
}

IdleSupport.prototype._request = function(callback) {
  // TODO
  return callback(null, 'OK');
}

util.inherits(IdleSupport, Command);

module.exports = IdleSupport;
