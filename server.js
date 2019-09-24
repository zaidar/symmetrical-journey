const express = require('express');
const app = express();
var router = express.Router()
<<<<<<< HEAD
const port = 8080;
var fs = require('fs');
router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

router.get('/sicp', function(req, res) {
  var heading = '#lang racket ';
  var output = heading.concat(req.query.sicp);
  console.log(output)
  fs.writeFile('sicp.rkt', output, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  require('child_process').exec('raco exe sicp.rkt ', function(err, stdout, stderr){
      require('child_process').exec('./sicp', function(err, stdout, stderr){
=======
const port = 80;

router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

router.get('/sicp',  function(req, res) {

  require('child_process').exec('raco exe 2.39.rkt ', function(err, stdout, stderr){
      require('child_process').exec('2.exe', function(err, stdout, stderr){
>>>>>>> 570de20f1bf9168a070e39e1642cfb18452fdf80
      res.send(stdout);
     });
  });


});
<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));
=======
>>>>>>> 570de20f1bf9168a070e39e1642cfb18452fdf80
app.use('/', router)                     // var wiki = require('./wiki.js');
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
