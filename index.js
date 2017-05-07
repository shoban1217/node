var express = require('express');
var os = require("os");

// Constants
var PORT = 8989;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World ' + os.hostname() + '\n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
