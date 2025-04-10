import express from "express";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js"

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", ProdutosController);

app.get("/", (req,res)=>{

    res.render("index.ejs");

});












app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro: " + error);
  } else {
    console.log("O servidor foi iniciado com sucesso!");
  }
});
