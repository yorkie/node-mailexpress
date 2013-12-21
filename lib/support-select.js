
var Command = require('./command').Command;
var util = require('util');

function SelectSupport() {
  Command.call(this, 'Capability');
}

SelectSupport.prototype._parse = function(message) {
  return message;
}

SelectSupport.prototype._request = function(callback) {
  // TODO
  return callback(null, 'OK');
}

util.inherits(SelectSupport, Command);

module.exports = SelectSupport;