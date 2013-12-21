

var Command = require('./command').Command;
var util = require('util');

function LoginSupport(context, message) {
  Command.call(this, context, message);
}
util.inherits(LoginSupport, Command);

LoginSupport.prototype._parse = function(message) {
  var m = message.toLowerCase().match(/[a-zA-Z0-9_@\.]+/g);
  if (m.length !== 3 || m[0] !== 'login')
    this.context.emit('error', new Error('Unknow Command Format'));
  else {
    var ret = {
      user: m[1],
      pass: m[2]
    }
    return ret;
  };
}

LoginSupport.prototype._request = function(params) {
  var user = params.user;
  var pass = params.pass;
  
}

module.exports = LoginSupport;