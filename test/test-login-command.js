
var util = require('util');
var test = require('tape').test;
var LoginCommand = require('../lib/support-login');

test('login', function(t) {
  t.plan(2);

  var loginOption = {
    user: 'yorkiefixer@gmail.com',
    pass: 'xxxxxxxxx'
  };
  var req = util.format('login "%s" "%s"', loginOption.user, loginOption.pass);
  var cmd = new LoginCommand(this, req);

  t.equal(loginOption.user, cmd._params.user);
  t.equal(loginOption.pass, cmd._params.pass);
})