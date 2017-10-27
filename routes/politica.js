var express = require('express');

var router = express.Router();

router.get('/politica',
function(req, res){
  res.render('politica');
});


module.exports = router;