var Twitter = require('twitter');
var TwitterLogin = require('node-twitter-api');
//Conexões com Midias sociais

//variáveis para conexão com as Apis do Twitter
var key = '37MrtfXKPjck0Q6mZXaIHLS7b';
var secret = 'NvFNy7P8CLQn70xvscesofePmRxagX1znlBr0BZUsPx6ICMnxo';
var token = null;
var token_secret = null;
var _requestSecret;
var callback_sucess = 'http://127.0.0.1:3000/login/twittersucess';
var full = null;
var id_max = null;

var twitter = new TwitterLogin({
    consumerKey: key,
	consumerSecret: secret,
	callback: callback_sucess
});


//Função responsável por fazer as requisições ao twitter
function pegartweets(res, token, token_secret){
	//cria o client que vai ser responsável por realizar as chamadas
	var client = new Twitter({
	  consumer_key: key,
	  consumer_secret: secret,
	  access_token_key: token,
	  access_token_secret: token_secret
	});

	//chamada responsável por traazer os tweets do usuário logado
	// as variaveis count responsável para trazer o máximo de tweets
	client.get('statuses/user_timeline',{count:300 , max_id:'407850699444477952'} , function(error, tweets, response) {
	  if(error) res.send(error);
	  res.json(tweets);
	});
};

//função responsável por capturar o access token do usuário, a partir de um request.
function getAccessToken(req, res){
    var requestToken = req.query.oauth_token,
    verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
        if (err)
            res.status(500).send(err);
        else
	        twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
	            if (err)
	                res.status(500).send(err);
                else
                	token = accessToken;
					token_secret = accessSecret;
                    pegartweets(res, token, token_secret);
            });
	});
};

//ao usuário clicar no botão de login o usuário é redirecoionado para a página de atutorização do app.
function requestToken(req,res,next){
	var twitter = new TwitterLogin({
        consumerKey: key,
    	consumerSecret: secret,
    	callback: callback_sucess
    });

    twitter.getRequestToken(function(err, requestToken, requestSecret) {
        if (err)
            res.status(500).send(err);
        else {
            _requestSecret = requestSecret;
            res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
            console.log("Request Token " + requestToken);
        };
    });
};    

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {pegartweets, requestToken, getAccessToken};