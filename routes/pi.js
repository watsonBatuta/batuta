var express = require('express');

var pi = require('../personality.js');
var router = express.Router();

var lo = require('../routes/login.js');

router.get('/match', function(req, res, next) {
	
	console.log("SESSION!!!!: "+req.session.itens);
	pi.personalidade(req,res,next,req.session.itens);
	//res.send(req.session.itens);
  	//res.render('index', json);
});

module.exports = router;