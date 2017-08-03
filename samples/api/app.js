var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.use('/public',express.static('public'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/status', function (req, res) {
  res.json({ status: 'ok'});
});

app.get('/service.json', function (req, res) {
  var rand = Math.floor(Math.random() * 3);
  var url = '/public/service' + rand + '.json';
  console.log(url);
  res.redirect(url);
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
