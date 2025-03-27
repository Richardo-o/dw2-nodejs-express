// Importando o pacote do Express.js
const express = require('express');
// Carregando o método principal do Express
const app = express(); // Iniciando o express


// Iniciando servidor na porta 8080
// O métdo listen do Express inicia um servidor
app.listen(8080, function(error){
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    }else {
        console.log("Parabéns! Você iniciou o seu primeiro servidor Express com Node.js");
    }
});