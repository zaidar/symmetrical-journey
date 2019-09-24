const express = require('express');
const app = express();
var router = express.Router()
const port = 80;

router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

router.get('/sicp',  function(req, res) {

  require('child_process').exec('raco exe 2.39.rkt ', function(err, stdout, stderr){
      require('child_process').exec('2.exe', function(err, stdout, stderr){
      res.send(stdout);
     });
  });


});
app.use('/', router)                     // var wiki = require('./wiki.js');
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
