var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var router = express.Router();
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  console.log('getting');
  res.send(req);
});

router.post('/', (req, res) => {
  // console.log('posting');
  // convert json body to csv
  var body = req.body.csvData;
  var csv = jsonToCsv(JSON.parse(body));
  // console.log(csv);
  // change to async
  fs.readdir('./client', (err, files) => {
    if(err) {
      throw err;
    }
    var count = files.length;
    // console.log('changed?', count);
    fs.writeFile(`./client/test${count}.csv`, csv, (err) => {
      if(err) {
        throw err;
      }
      console.log('file saved');
    });
  })
})

app.use('/', router);

app.listen(port, function() {
  console.log('listening on port ' + port);
});


// helper function to convert json to csv
var jsonToCsv = function(obj) {
  var header = 'firstName,lastName,county,city,role,sales';
  var headerArr = header.split(',');
  // console.log(headerArr);
  var iteratee = [];
  var current = obj;
  iteratee.push(current);
  // console.log(obj);
  var csv = '';

  while (iteratee.length > 0) {
    var current = iteratee.shift();
    for (var i = 0; i < headerArr.length; i++) {
      csv += current[headerArr[i]] + ',';
    }

    csv = csv.substr(0, csv.length - 1) + '\n';

    if (current.children.length > 0) {
      current.children.forEach(child => iteratee.push(child));
    }
  }
  return header + '\n' + csv.substr(0, csv.length - 2);
}