// estamos tentando ler um artivo txt dentro da nossa pasta local READFILE
let { readFile, writeFile } = require('fs');

readFile("arquivo.txt", "utf8", (erro, texto) => {
    if (erro) {
        throw error;
    } else {
        console.log(texto);
    }
});

//alterar o arquivo WRITEFILE
writeFile("arquivo.txt", "Texto alterado por writeFile", (erro) => {
    if(erro){
        throw erro;
    } else {
        console.log("Escreveu com sucesso!");
    }
});

// utilizando HTTP
const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write('\
    <h1> Hello World </h1>\
    <p>primeira pagina com Node.JS</p>\
    ');
    response.end();
}); 

server.listen(8000);

console.log("Ouvindo a porta 8000");

// EXPRESS

let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send("Primeira rota com express");
});

app.listen(3000, function() {
    console.log("A aplicação está funcionando.")
});