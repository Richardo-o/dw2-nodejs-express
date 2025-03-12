// ARRAY (Vetor ou Lista);
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos Índices...");

console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log("Exibindo a lista através do FOR");

for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista através do forEach");

Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do forEach com os índices...");

Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

// MÉTODOS DE MANIPULAÇÃO DE VETORES

let vetor = ["Laranja", "Maçã", "Banana"];

console.log(`Nosso vetor eh ${vetor}`);

vetor[3] = "Morango";

console.log(`Nosso vetor eh ${vetor}`);

// Método push - insere um novo elemento no final do vetor

vetor.push("Abacaxi");
console.log(`Nosso vetor eh ${vetor}`);

// Método unshift - Insere um novo elemento no início do vetor

vetor.unshift("Pera");
console.log(`Nosso vetor eh ${vetor}`);

// Sem método Unshift

vetor[0] = "pera";
console.log(`Nosso vetor eh ${vetor}`);

// Método length - Retorna o Número de Elementos no Vetor

let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de números é: ${numeros}`);
console.log(`O número de elements do vetor é ${numeros.length}`);

// Método sort- Ordenar o Vetor

console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}`);

// Ordenação de números com SORT

console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordenando de forma crescente

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));

/////////////////////////////////////////////////////////////////////////////////
// OBJETOS LITERIA (não são derivados de classes)                              //
// Objetos possuem Atributos e Métodos                                         //
// Lado Esquerdo: Chaves / Lado direito: valores                               //
/////////////////////////////////////////////////////////////////////////////////

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelha",
  acelerar() {
    console.log("Acelerando...");
  },

  frear() {
    console.log("Freando...");
  },
};

console.log(`O modelo do carro é: ${carro.modelo}`);
console.log(carro.cor);
carro.acelerar();
carro.frear();

////////////////////////////////////////////////////////////////

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};

console.log(produto);
console.log(
  `O ${produto.nome} da marca ${produto.marca} custa apenas R$ ${produto.preco}. ${produto.descricao}`
);

////////////////////////////////////////////////////////////////

//Arrays de objetos

const productList = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Ótima velocidade de processamento",
  },

  // Produto 2
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },

  // Produto 3

  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ótima velocidade de processamento",
  },
];

console.log();

// Exibind oo ARRAY DE OBJETOS com forEach:

productList.forEach((produto) => {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Marca: ${produto.marca}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Descrição: ${produto.descricao}`);
});

// console.table

console.table(productList);