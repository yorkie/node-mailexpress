
var mailexpress = require('../index');
var mailapp = mailexpress();

mailapp.on('Capability', function(req, res) {
  console.log(arguments);
})
mailapp.listen(10010, function() {
  console.log('your mail server is up on 10010');   
});
