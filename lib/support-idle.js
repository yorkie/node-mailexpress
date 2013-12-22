

var Command = require('./command').Command;
var util = require('util');

function IdleSupport() {
  Command.call(this, 'Capability');
}

IdleSupport.prototype._parse = function(message) {
  if (!/idle/i.test(message))
    this.context.emit('error', new Error('Unknown Command Format'));
  else
    return true;
}

IdleSupport.prototype._request = function(params) {
  this.response('+ idling');
}

util.inherits(IdleSupport, Command);

module.exports = IdleSupport;
