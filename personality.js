var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
//match com frevo de bloco
var texto = 'Que mulher é essa senhor!!!!??? Vc não precisa parar de consumir, apenas consumir consciente! Acho que esse é o tipo de vídeo que todo mundo deveria dedicar um tempinho pra ver, seja qualquer tipo de pessoa! Meu Deus eu adoro essa menina! Hahahahahahahahha Já passamos muito por isso e acho q vai ser dobrado no TCC 😥 Lisandra Cruz Gabriele Pessoa Vamos ver se agora as "pessoa" compreendem o quanto é perigoso esse processo desse Juíz por mais que pareça sútil e "pra quem quer".  Gente, é rapidinho é só se cadastrar e pronto, se vc for compatível com ela pode salva-la e se não for, um dia poderá ser com alguém! Simbora!!!!! P.s: num dói, não tem risco de ficar com alguma deficiência e é tão de boas que ninguém fica nem internado, no mesmo dia cabou! Se tá no pai Google, é verdade! <3 Que mulher é essa?! P.s: os comentários são ótimos!!! Meu Deus, virei fã dessa menina! Inspiração!';
var db = require("./db");
//match frevo canção
//var texto = 'O HOMÃO Alguns anos atrás, escrevi um texto chamado O Mulherão para o Dia Internacional da Mulher. Fez um razoável sucesso, tanto que até hoje esse texto é lido e publicado em diversos veículos de comunicação quando chega março. Pois cá estamos, novamente, na vizinhança desta data comemorativa, e desta vez minha homenagem vai para o homão, aquele que não tem dia algum no calendário para valorizar seus esforços. Homão é aquele que tem assistido a ascensão feminina nas empresas, na política, na arte, no esporte e tem achado tudo mais do que justo. Nunca li um artigo de um homem reclamando por as mulheres estarem dominando o mundo (não acredito que escrevi isso!). Ao contrário: os inteligentes (e todo homão é inteligente) estão tendo muito prazer em compartilhar seus gabinetes conosco e não choram pelos cantos caso tenham uma chefe mulher (homão chora, mas chora por amor, não por motivos toscos). Homão gosta de mulher. Parece óbvio, mas há muitos homens (não homões) que só gostam de mulher para cama, mesa e banho. O homão gosta de mulher para cama, mesa, banho, escritório, livraria, cinema, restaurante, sala de parto, beira de praia, estrada, museu, palco, estádio. E, às vezes, pode nem gostar delas pra cama, mesa e banho, e ainda assim continuar um homão. Homão é aquele que encara parque no final de semana, faz um jantar delicioso, dá conselho, pede conselho, trabalha até tarde da noite, compensa no outro dia buscando os filhos na escola, dirige o carro, em outras vezes é co-piloto, não acha ruim ela ganhar mais do que ele, não acha nada ruim quando ela propõe uma noitada das arábias, recebe amor, dá amor, é bom de contabilidade e sabe direitinho o que significa fifty-fifty. Homão é aquele que compreende que TPM não é frescura e que reconhece que filhos geralmente sobrecarregam mais as mães do que os pais, então eles correm atrás do prejuízo, aliviando nossa carga com prazer. Homão acha um porre discutir a relação, mas discute. Homão não concorda com tudo o que a gente diz e faz, senão não seria um homão, e sim um panaca, mas escuta, argumenta e acrescenta idéias novas. Homão não fica dizendo que no tempo do pai dele é que era bom, o pai mandava e a mãe obedecia. Homão reconhece as vantagens de estar interagindo com seres do mesmo calibre e não depende de uma arma ou de um carro ultrapotente para provar que é um homão. O homão sabe que não há nada como ter uma grande mulher a seu lado.';

//frevo de rua
//var texto = 'Eu tenho um amigo, o Lelo, que, quando era ainda criancinha, foi apelidado de Beija-Flor. São várias as hipóteses para a concessão desse apelido tão penoso – no sentido ornitológico da palavra – mas a maioria delas diz respeito ao fato de ninguém se lembrar de algum dia ter visto o Lelo em estado de repouso. Ele está sempre fazendo um monte de coisas ao mesmo tempo, freqüentando tudo quanto é curso que aparece, pulando para lá e para cá e, acima de tudo, tendo idéias e dando sugestões. Como se ele sempre tivesse uma fórmula revolucionária e sob medida para qualquer situação. Um dia desses, chateado, o Lelo me contou que toda aquela sua boa vontade, dedicação e disposição só lhe tinham rendido dissabores nas empresas por onde passara. O que ele chamava de ‘interesse’, os outros viam como ‘intromissão’. O que ele entendia como ‘entusiasmo’, os demais classificavam como ‘falta de foco’. Ele se achava ‘dinâmico’ e todos diziam que ele era ‘dispersivo’. E por aí vai. Por casualidade, naquela mesma tarde eu bati o olho num artigo sobre beija-flores. E, finalmente, decifrei o Lelo. Ao contrário das demais aves, que voam com o corpo na posição horizontal, o beija-flor quando voa mantém o corpo na vertical. Por isso, suas asas não batem para cima e para baixo, como as de seus colegas de pena, mas para frente e para trás. Parece fácil, mas não é: para conseguir essa proeza, o beija-flor precisa bater as asas mais de 60 vezes por segundo. E tudo isso requer um enorme esforço de seu corpo: ele respira 4 vezes por segundo e seu coração tem que bater 1.260 vezes por minuto. É claro que, para manter tal vitalidade a vida inteira, o beija-flor precisa de energia. Muita energia. Ele consome, a cada dia, entre metade e ¾ do peso de seu corpo em açúcar. E é aí que vem o grande paradoxo dos beija-flores: nada menos que 80% da energia que eles produzem é gasta apenas e tão-somente para sustentar seu peculiar estilo de vôo. E esse é exatamente o retrato bem acabado do meu amigo Lelo. A maior parte de seu esforço lhe dá forças para ele continuar se esforçando. Ele poderia, como muita gente já lhe sugeriu, arranjar um empreguinho bem tranqüilo, passar o expediente sentado diante de uma pilha de papéis ou de uma tela de micro, piando só na hora certa e recebendo em troca um pacote de vale-refeição. Assim como o Lelo, os beija-flores também poderiam pensar em dar um chega-pra-lá na Natureza e implantar uma reengenharia radical em seu estilo de vida. Se um beija-flor aprendesse a retirar o néctar das flores de uma maneira mais produtiva (pousando na planta ao invés de ficar batendo asa ao lado dela), ele reduziria sua carga de trabalho em 80%. Teria menos estresse, não sobrecarregaria tanto seu coração, poderia respirar mais calmamente e, provavelmente, viveria bem mais tempo do que vive. Por que então o beija-flor nunca pensou nessa solução tão mais, digamos, cômoda? Porque então ele se transformaria em um passarinho qualquer, e aí teria duas opções na vida: ou ficaria trancado numa gaiola, piando na hora certa e ganhando sua raçãozinha de alpiste, ou viveria uma vida de pardal, voando anônimo pela vida, sem despertar a atenção e a simpatia de ninguém. Com o Lelo – e os lelos em geral – acontece a mesma coisa: ser um voador incansável e, principalmente, um sonhador determinado, não é a sua opção. É a sua natureza.';

var personalidadeRua = require('./public/modelo/frevoRua_en.json');
var personalidadeCançao = require('./public/modelo/frevoCancao_en.json');
var personalidadeBloco = require('./public/modelo/frevoBloco_en.json');
var tradutor = require("./translate.js");

var personality_insights = new PersonalityInsightsV3({
	username: '79c9f7f5-3cc6-4912-a1bc-4ba8da5e5915',
	password: 'qhD15EDix7WW',
	version_date: '2016-10-20'
});



function personalidade(req,res,itens){


	var texto_traduzido = tradutor.traduzir(texto, 
	function(textoTraduzido) {
		console.log(itens.contentItems);
		var params = {
			// Get the content items from the JSON file.
			content_items: itens.contentItems,
			consumption_preferences: false,
			raw_scores: true,
			headers: {
				'accept-language': 'pt-br',
				'content-type' : 'application/json',
				'content-language' : 'en',
				'accept': 'application/json'
			}
		};


		personality_insights.profile(params, function(error, response) {
			if (error)
				console.log('Error:', error);
			else
				match(req, res, response);

				//console.log(JSON.stringify(response, null, 2));
			}
		);
	},
	 function(err) {
		console.log(err)
	});
};

// função para comparar a personalidade do usuário com a das músicas.
function match (req, res, arrayPersonalidade) {
	var diferençafr = null;
	var diferençafc = null;
	var diferençafb = null;
	var diferenças = [];
	tipoFrevo = {'imagem':null,"idMusica":null};
	tipoFrevo.modelo = arrayPersonalidade;

	// Faz o cálculo da diferença entre as características de cada frevo.
	arrayPersonalidade.needs.forEach( function(element, index) {
		var fr = Math.abs(element['raw_score'] - personalidadeRua['needs'][index]['raw_score']);
		diferençafr = diferençafr + fr;
		var fc = Math.abs(element['raw_score'] - personalidadeCançao['needs'][index]['raw_score']);
		diferençafc = diferençafc + fc;
		var fb = Math.abs(element['raw_score'] - personalidadeBloco['needs'][index]['raw_score']);
		diferençafb = diferençafb + fb;
	});

	console.log(diferençafb,diferençafr, diferençafc);

	//console.log(Math.min(diferençafb, diferençafr, diferençafc));
	menor = Math.min(diferençafb, diferençafr, diferençafc)
	switch (menor) {
		case diferençafr:
			tipoFrevo.idMusica = '0PIzeDHvE2l3fgp4p9HI18';
			tipoFrevo.imagem = '/images/frevo-de-rua.jpg';
			tipoFrevo.nome = "Frevo-de-rua";
			tipoFrevo.descricao = "Primeiro gênero a surgir, é puramente instrumental e único no mundo. Este frevo é destinado a ser dançado.";
			console.log('frevo rua');
			break;
		case diferençafc:
			tipoFrevo.idMusica = '0QdYkYj0QRzVEZN0g7YwjW';
			tipoFrevo.imagem = '/images/frevo-cancao.jpg';
			tipoFrevo.nome = "Frevo-canção";
			tipoFrevo.descricao = "Apresentando uma melodia mais cantável e andamento mais lento que o frevo-de-rua, este frevo é popular por grandes intérpretes e composições.";
			console.log('frevo canção');
			break;
		case diferençafb:
			tipoFrevo.idMusica = '4iBtD1GfiQG3lrRDh6uEex';
			tipoFrevo.imagem = '/images/frevo-de-bloco.jpg';
			tipoFrevo.nome = "Frevo-de-bloco";
			tipoFrevo.descricao = "Executado por orquestra de pau-e-cordas que tem seu aparecimento relacionado ao início da efetiva participação da mulher na folia de rua do Recife.";
			console.log('frevo bloco');
			break;
		default:
			console.log("deu algum erro");
			break;
	};

	//console.log(tipoFrevo);
	//console.log(personalidadeBloco['needs'][0]);
	//res.send(tipoFrevo.modelo);
	console.log('variaveil quiz');
	console.log(req.session.index);
	req.session.tipoFrevo = tipoFrevo;
	req.session.save();
	res.render('playFrevo', tipoFrevo);

	
};

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {personalidade};