
var net = require('net');
var util = require('util');

var EventEmitter = require('events').EventEmitter;
var MailClient = require('./lib/client').MailClient;

function MailExpress(option) {
  EventEmitter.call(this);
  this._option = option;
  this._server = net.createServer(option, this._onConnection.bind(this));
  this._clients = [];
}
util.inherits(MailExpress, EventEmitter);

/* Public API */
MailExpress.prototype.listen = function(port, callback) {
  this._server.listen(port, callback);
}

/*
 * set the max connections number
 */
MailExpress.prototype._setMaxConnection = function(n) {
  if (typeof n !== 'number')
    throw new Error('Please set max connection number by a number');
  this._maxConnections = n;
}

/*
 * Event: connection
 */
MailExpress.prototype._onConnection = function(socket) {
  this._clients.push(new MailClient(socket));
}

module.exports = function(option) {
  return new MailExpress(option);
};
