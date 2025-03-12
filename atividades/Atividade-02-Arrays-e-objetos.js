// Exercicio 01 vetor

let listaEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Brasília', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraiba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
listaEstados.forEach((estados, i) => {
    console.log(`Os estados são: ${i+1} ${estados}`)
});

// Exercicio 02 

let pessoa = {
    nome: 'Ricardo',
    idade: 19,
    cidade: 'Jacupiranga-SP',
    hobby: 'Jogar Valorant',
    música: 'Better Now',

};

console.log(`Seu Nome é: ${pessoa.nome}`);
console.log(`Sua idade é: ${pessoa.idade}`);
console.log(`Sua Cidade é: ${pessoa.cidade}`);
console.log(`Seu Hobby: ${pessoa.hobby}`);
console.log(`Sua música preferida é: ${pessoa.música}`);