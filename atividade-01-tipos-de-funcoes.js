//ex 01

function mostrar (nome, cidade){

    console.log(`Seu nome é: ${nome} e sua cidade é: ${cidade}`);
}

mostrar("Ricardo", "Jacupiranga");

//ex 02

function divisao (n1, n2){


    return n1/n2;

}

console.log(`O resultado da divisão é: ${divisao(2,2)}`);



//ex 03

function operacao(n1, n2, n3){

    return n1*n2*n3;


}

console.log (`A multiplicação entre os numeros eh ${operacao(2,2,2)}`);

//ex 04


function Idade (idade){

    if(idade >= 18){

       return "Você é maior de idade";

    } else {

       return "Você é menor de idade";

    }


}

console.log(`Digite sua idade: ${Idade(16)}`);

//ex 05 
 

let media = function(x1,x2){

    return (x1 + x2) / 2;

}

console.log(`A média entre as ${media(10,10)}`);

//ex 06

const triplo = (n1) =>{

    return n1*3;

}

console.log(`O triplo do numero eh: ${triplo(3)}`);

//ex 7

const soma = (n1, n2, n3, n4) =>{

    return  n1+n2+n3+n4;

}

console.log(`A soma dos numeros é: ${soma(1,1,1,1)}`);

//ex8

const iife = (function () {
    let nome = "Ricardo";
    console.log(`Saudações: ${nome} `);
  })();