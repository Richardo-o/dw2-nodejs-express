import express from "express";

const router = express.Router();

router.get("/clientes/", (req,res)=>{

    const clientes = 
    [
       
    ]








    res.render ("clientes",{

        clientes : clientes
    });

});