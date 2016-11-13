var express = require('express')
var app = express()

var PORT = process.env.PORT||3000;

app.get('/', function (req, res) {
  res.send('Hello World! from '+"name: "+process.env.NAME)
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})