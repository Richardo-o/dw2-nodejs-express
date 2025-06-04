import express from "express";
// importando controllers
import MoviesController from "./controller/MoviesController.js";

// importando conexão
import connection from "./config/sequelize-config.js";

const app = express();

// Usando ejs
app.set("view engine", "ejs");

// Usando rotas estaticas
app.use(express.static("public"));


// Permite cadastrar em formulários

app.use(express.urlencoded({extended:false}));

// Usando controllers

app.use("/", MoviesController);




//Criando banco de dados

connection.authenticate().then(()=>{
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error)=>{
    console.log(error);
})

connection.query(`CREATE DATABASE IF NOT EXISTS movies;`).then(()=>{
    console.log("O banco de dados está criado.")
}).catch(error => {
    console.log(error);
})

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro: " + error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${8080}`);
  }
});
