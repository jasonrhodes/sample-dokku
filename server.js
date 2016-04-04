var app = require('express')();

app.get('/', function(req, res) {
  res.send('You found my sweet dokku app');
});

app.get('/env', function(req, res) {
  if (process.env.MY_PRIVATE_VAR) {
    res.send(`shh you found the private env var ${process.env.MY_PRIVATE_VAR}`);
  } else {
    res.send('To set a private env var in dokku, log into the dokku box and use "$ dokku config:set <your-app> MY_PRIVATE_VAR=yaysocool"');
  }
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`App listening on port ${process.env.PORT || 9999}`);
});
