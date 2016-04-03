var app = require('express')();

app.get('/', function(req, res) {
  res.send('You found my sweet dokku app');
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`App listening on port ${process.env.PORT}`);
});
