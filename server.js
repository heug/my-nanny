var express = require('express');

var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
  next();
});

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/build/index.html');
});

app.listen(8080);
