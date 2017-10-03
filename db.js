var json = { question:"Qual tipo de Frevo você é?", answers : ["delando", "thiago", "Gleybson", "Frevo"]};
var sessionQuiz = 0;
var index = 0;
var questionsQuiz = null;
var respostas = [];

//função responsável por recuperar as questões do banco de dados mysql
function getQuiz(req, res, next) {
	//if necessário para garantir que a página do quiz só será renderizada com as questões carregadas.
	if (questionsQuiz==null){
		req.getConnection(function(err, connection){
			connection.query('Select question.description as pergunta, answer.description as resposta from question, answer where question.id_question = answer.id_question and question.id_question = 1',[],function(err,result){
				if(err) return err;				
				//com o resultado da consulta o banco, o Json vai ser montado no formato desejado.
				questionsQuiz = montarJson(result);
				getQuiz(req,res,next);
				//res.render('index', questionsQuiz.Perguntas[index]);

			});
		});  	
	
	}else{
		res.render('quiz', questionsQuiz.Perguntas[index]);	
	};
};


function montarJson(result){
	//result é o retorno da consulta no banco.
	//Selecionar uma pergunta que ainda nao foi registrada para secao atual 
	return {"qtdQuestions" : 2, "Perguntas":[{ "question": result[0].pergunta, "answers" : [ result[0].resposta , result[1].resposta , result[2].resposta , result[3].resposta ] }	, { "question": "pergunta2", "answers": ["1","2","3","4"]}]};
			

};

function saveAnswer(req,res,next){
	//adiciona no array as respostas do usuário para ao fim do quiz armazenar todas as perguntas no quiz.
	respostas.push(req.body.resp);
	//index responsável por identificar
	index++;
	res.render('quiz', questionsQuiz.Perguntas[index]);
	console.log(respostas);

};

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {getQuiz, saveAnswer};