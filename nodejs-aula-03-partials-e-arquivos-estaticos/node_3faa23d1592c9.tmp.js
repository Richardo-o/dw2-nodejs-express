// Importando o pacote do Express.js
const express = require('express');
// Carregando o método principal do Express
const app = express(); // Iniciando o express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs');


// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisisão
// RES -> Trata a resposta

app.get("/", (req, res)=>{
    res.render("index");
});

// ROTA DE PERFIL

app.get("/perfil/:perfil?", (req,res)=>{

    //Coletando o parâmetro da rota
    const perfil = req.params.perfil;

    res.render("perfil",{
        // Eviando a variável que é chamada na pagina
        perfil : perfil

        
    });

   

});

// ROTA DE PRODUTOS

app.get("/produtos/:produto?", (req,res) =>{
    //Coletando o parâmetro da rota
    const produto = req.params.produto;

    // Criando array de produtos

    const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']

    res.render("produtos",{

        // Enviando variáveis para a página

        produto : produto,
        produtos : produtos
    });
    res.render("produtos",{
        // Enviando a variável produto para a página
        produto : produto

        // o produto da esquerda é a variável que é chamada na página
        // o produto no lado direito é o valor da variável
    });


   
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
