

var Command = require('./command').Command;
var util = require('util');

function LogoutSupport() {
  Command.call(this, 'Capability');
}

LogoutSupport.prototype._parse = function(message) {
  return message;
}

LogoutSupport.prototype._request = function(callback) {
  // TODO
  return callback(null, 'OK');
}

util.inherits(LogoutSupport, Command);

module.exports = LogoutSupport;
