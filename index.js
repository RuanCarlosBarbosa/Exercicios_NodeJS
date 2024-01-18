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