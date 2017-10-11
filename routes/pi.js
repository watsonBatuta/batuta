var express = require('express');
var db = require("../db");
var pi = require('../personality.js');
var router = express.Router();

router.get('/match', function(req, res, next) {
	
	//console.log("SESSION!!!!: "+req.session.itens.contentItems);
	pi.personalidade(req, res, req.session.itens);
	//res.send(req.session.itens);
  	//res.render('index', json);
});

router.post('/obrigado', function(req, res, next){
	console.log("tipo de frevo " + req.body.tipo);
	console.log("Session: %j", req.body.modelo);
	db.saveModel(req,res,next);

});

module.exports = router;