var watson = require('watson-developer-cloud');


function traduzir(texto, successCallback, errCallback){

    var language_translator = watson.language_translator({
        url: "https://gateway.watsonplatform.net/language-translator/api",
        username: 'ca50a514-4ae8-4f33-a6c6-493899eed6b1',
        password: 'SGUqzITxuRXz',
        version: 'v2'
    });
        language_translator.translate({
        text: texto,
        source: 'pt',
        target: 'en'
    }, function(err, translation) {
        if (err)
            errCallback(err)
        else
            var x = translation.translations[0].translation;
            successCallback(x)
    });

};
module.exports = {traduzir};
