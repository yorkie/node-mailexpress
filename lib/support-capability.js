

var Command = require('./command').Command;
var util = require('util');

function CapabilitySupport() {
  Command.call(this, 'Capability');
}

CapabilitySupport.prototype._parse = function(message) {
  return message;
}

CapabilitySupport.prototype._request = function(callback) {
  // TODO
	return callback(null, 'OK');
}

util.inherits(CapabilitySupport, Command);

module.exports = CapabilitySupport;
