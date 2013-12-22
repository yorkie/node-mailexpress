

var Command = require('./command').Command;
var util = require('util');

function LogoutSupport() {
  Command.call(this, 'Capability');
}
util.inherits(LogoutSupport, Command);

LogoutSupport.prototype._parse = function(message) {
  if (!/logout/i.test(message))
    this.context.emit('error', new Error('Unknown Command Format'));
  else
    return true;
}

LogoutSupport.prototype._request = function(params) {
  if (params) {
    this._response.sayOk('logout successfully');
    this._context._socket.close();
  }
}


module.exports = LogoutSupport;
