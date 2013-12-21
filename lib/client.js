
var command = require('./command');
var MailResponse = require('./response').MailResponse;

exports.MailClient = MailClient;

function MailClient(socket, option) {
  var option = option || {};
  this._socket = socket;
  this._buffers = [];
  this._encoding = option.encoding || 'utf8';
  this._currentLine;
  this._currentTag = '';
  // register a response
  this._response = new MailResponse(this);
  // welcome
  this._welcome();
  // on listening
  this._socket.on('data', this._onData.bind(this));
  this._socket.on('close', this._onClose.bind(this));
  this._socket.on('error', this._onError.bind(this));
}

MailClient.prototype._welcome = function() {
  var message = '* OK [CAPABILITY IMAP4 IMAP4rev1 IDLE XAPPLEPUSHSERVICE ID UIDPLUS AUTH=LOGIN NAMESPACE]'
  this._writeLine(message+' MailExpress Server Ready!');
  this._send();
}

MailClient.prototype._writeLine = function(line) {
  var buf = this._currentLine = new Buffer(line+'\n');
  this._buffers.push(buf);
}

MailClient.prototype._send = function() {
  var data = this._buffers.reduce(function(prev, next) {
    return prev.concat(next);
  })
  this._buffers = [];
  this._socket.write(data, this._encoding);
}

MailClient.prototype._onData = function(chunk) {
  var msg = chunk.toString(this._encoding).match(command.reg);
  if (!msg || !msg[2]) {
    this._response.sayBad('Invalid Command');
  } else {
    this._currentTag = msg[1];
    this._currentCommand = msg[2];
    // generate the corresponding command function and next step.
    var cmdfunc = command.supports[msg[2].toLowerCase()];
    new cmdfunc(this, msg[0]);
  }
}

MailClient.prototype._onClose = function() {
  // TODO
}

MailClient.prototype._onError = function(er) {
  // TODO
}
