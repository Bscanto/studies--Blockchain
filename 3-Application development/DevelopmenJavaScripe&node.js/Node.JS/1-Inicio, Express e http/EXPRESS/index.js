const express = require("express"); // importando o express
const app = express(); // iniciando o express

app.get("/", function (requisicao, resposta) {
    resposta.send("<h1>Bem Vindo ao Guia do Programador</h1>");
});  // configuração de rotas


app.get("/blog/:artigo?", function (requisicao, resposta) {

    var artigo = requisicao.params.artigo;
    
    if(artigo){
    resposta.send("<h2>Artigo: " + artigo + "</h2>");
    }else{
    resposta.send("<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com</h3>")
}
})   // outra rota


app.get("/canal/youtube", function (requisicao, resposta) {
    var canal = requisicao = requisicao.query["canal"]

    if(canal){
        resposta.send(canal);
    }else{
        resposta.send("nenhum canal fornecido!");
    }
    resposta.send(canal);
}); // outra rota 

app.get("/ola/:nome", function (requisicao, resposta) {
    // REQUISICAO => DADOS ENVIADOS PELO USUÁRIO
    // RESPOATA => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = requisicao.params.nome;
    resposta.send("<h1>Oi " + nome + "</h1>");
});


app.listen(4000, function (erro) {
    if (erro) {
        console.log('Ocorreu um erro!');
    } else {
        console.log("servidor iniciado com sucesso!")
    }

});
