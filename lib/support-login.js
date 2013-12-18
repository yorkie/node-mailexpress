

var Command = require('./command').Command;
var util = require('util');

function LoginSupport() {
  Command.call(this, 'Capability');
}

LoginSupport.prototype._parse = function(message) {
  return message;
}

LoginSupport.prototype._request = function(callback) {
  // TODO
  return callback(null, 'OK');
}

util.inherits(LoginSupport, Command);

module.exports = LoginSupport;
