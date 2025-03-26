// Exercicio 01 vetor

let listaEstados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Brasília",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraiba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
listaEstados.forEach((estados, i) => {
  console.log(`Os estados são: ${i + 1} ${estados}`);
});

// Exercicio 02

let pessoa = {
  nome: "Ricardo",
  idade: 19,
  cidade: "Jacupiranga-SP",
  hobby: "Jogar Valorant",
  música: "Better Now",
};

console.log(`Seu Nome é: ${pessoa.nome}`);
console.log(`Sua idade é: ${pessoa.idade}`);
console.log(`Sua Cidade é: ${pessoa.cidade}`);
console.log(`Seu Hobby: ${pessoa.hobby}`);
console.log(`Sua música preferida é: ${pessoa.música}`);

// Exercicio 03

let Filmes = [
  {
    titulo: "Os Vingadores – The Avengers",
    genero: "Ação",
    ano: "2012",
    classificacaoIdade: "PG-13",
  },


  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    genero: "Aventura",
    ano: "2001",
    classificacaoIdade: "PG-13"
  },

  {
    titulo: "Jurassic Park",
    genero: "Ficção Científica",
    ano: "1993",
    classificacaoIdade: "PG-13"
  },

  {
    titulo: "O Rei Leão",
    genero: "Animação",
    ano: "1994",
    classificacaoIdade: "G"
  },

  {
    titulo: "Matrix",
    genero: "Ação, Ficção Científica",
    ano: "1999",
    classificacaoIdade: "R"
  },
];

Filmes.forEach(sobre => {

    console.log(`\n O título do filme é ${sobre.titulo}`);
    console.log(`\n O gênero do filme é ${sobre.genero}`);
    console.log(`\n O ano do filme é ${sobre.ano}`);
    console.log(`\n A classificação do filme é ${sobre.classificacaoIdade}`);
    
});

console.table(Filmes);