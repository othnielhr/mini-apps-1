// importing all requirements
var express = require('express');
// var Promise = require('bluebird');
// var bodyParser = require('body-parser');
// var path = require('path');
var app = express();
var router = express.Router();
var port = 3000;

// Middleware
// var jsonToCsv = require('./utils/jsonToCsv').jsonToCsv;

// // Helper functions
// var fs = require('fs');
// fs.readFileAsync = Promise.promisify(fs.readFile);
// fs.writeFileAsync = Promise.promisify(fs.writeFile);
// fs.unlinkAsync = Promise.promisify(fs.unlink);
router.get('/', (req, res) => {
  console.log('getting');
  res.send(req);
});

router.post('/', (req, res) => {
  console.log('posting');
  if(err) {
    throw err;
  }
  res.status(200);
  res.send(req);
})

app.use('/', router);


app.listen(port, function() {
  console.log('listening on port ' + port);
});