// Comentário em JS
/* Comentário
em bloco ... */
// CTRL + ; - Atalho

// Declaração de variáveis no JS
// CONST x LET x VAR

const nome = "Ricardo"; // Uma constante precisa de um valor inicial
let Nome = "Ricardo"; // Permite iniciar a variável vazia

// cosnt name = 'ricardo' -> Resulta em um erro.
// let Nome -> Resulta em um erro.

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor.

const message = "Hello, world! Iniciando estudos com JavaScript!";
console.log(message);

//Typeof (esse comando exibirá o tipo da variável)

const estado = "SP";
const idade = 18;
let endereco;

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

//O Javascript é uma linguagem dinâmica e tipagem fraca.
////////////////////////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES NO JAVASCRIPT

function minhaFuncao() {}

console.log(typeof minhaFuncao);

// FUNÇÇAO SIMPLES

function saudacao() {
  console.log("Olá bem-vindo");
}

saudacao();

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro é um dado que a função recebe.
// Argumento é um dado enviado para função.

function Saudacao(nome) {
  // O nome é o parametro.

  console.log("Olá, bem-vindo " + nome);

  //Usando tamplate string

  console.log(`Olá, bem-vindo ${nome}`);

  // ${} -> Placeholder
}

Saudacao("Ricardo"); //Argumento é o "Ricardo".

// FUNÇÃO COM MAIS DE UM PARÂMETRO

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números: ${resultado}.`);
}

soma(18, 5);

function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`A soma dos dois numeros foi: ${Soma(2, 6)}`);

//FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let num = 1;

console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANÔNIMA

let dobro = function (x) {
  return x * 2;
};

console.log(dobro(15));
console.log(`O dobro do número eh ${dobro(15)}!`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA

const Dobro = (x) => {
  return x * 2;
};

console.log(`Função dobro com Arrow function. resultado ${Dobro(10)}`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO

const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

console.log(`O reusultado da operação eh: ${calc(6, "*", 6)}`);

// SIMPLIFICANDO ARROW FUNCTION

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);

console.log(`O reusultado da operação eh: ${Calc(7, "*", 7)}`);

// IIFE - Immediately Invoked Function Expression
// Função Imediata - úlima \o/

const iife = (function () {
  console.log("Estou sendo executada imediatamente.");
})();

// IIFE COM PARÂMETRO

const start = (function () {
  console.log(`Executando imediatamente o app ${app}`);
})("Whatsapp");

//git add .
//git commit -m "@seu-username"
//git push