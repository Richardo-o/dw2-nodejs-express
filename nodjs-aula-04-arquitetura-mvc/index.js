// Importando o pacote do Express.js
// Modo ES6 de importação:
import express from "express";


// Carregando o método principal do Express

//const express = require('express');
// Carregando o método principal do Express
const app = express(); // Iniciando o express

//Importando os Controllers (onde etão as rotas)
import ProdutosController from "./controllers/ProdutosController.js"

// CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs');

// CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// Configurando o Express para utilizar as rotas dos Controllers
app.use("/", ProdutosController)

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisisão
// RES -> Trata a resposta

app.get("/", (req, res)=>{
    res.render("index");
});





// Iniciando servidor na porta 8080
// O métdo listen do Express inicia um servidor
app.listen(8081, (error)=>{
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    }else {
        console.log("Servidor iniciado com sucesso!");
    }
});
