
//Atividade 03

// Ex 01
class Heroi {
    constructor(nome, vida, velocidade, forca){

        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;

       
    }

    correr(){
        return "O héroi está correndo";
}
    andar(){
        return "O héroi está andando";
    }

    atacar(){
        return "O héroi está atacando";
    }
    
    defender(){
        return "O herói está defendendo";
    }
    }

    let homemAranha = new Heroi("Homem Aranha", 100, "20kmh", "20");

    homemAranha.teia = 0;
    homemAranha.sentidoAranha = () => {
        return "Homem Aranha detectou perigo";
    }
    console.log(homemAranha.nome);
    console.log(homemAranha.vida);
    console.log(homemAranha.velocidade);
    console.log(homemAranha.forca);
    console.log(`O ${homemAranha.nome} ${homemAranha.teia} não pode soltar teia `);
    console.log(homemAranha.sentidoAranha());

   
let Superman = new Heroi ("Superman", 100, "30kmh", "40");

    Superman.podeVoar = 1;
    Superman.visaoCalor = () => {
        return "O Superman está usando sua visão de calor";
    }

    console.log(Superman.nome);
    console.log(Superman.vida);
    console.log(Superman.velocidade);
    console.log(Superman.forca);
    console.log(`O ${Superman.nome} ${Superman.podeVoar} pode voar `);
    console.log(Superman.visaoCalor());


    let Batman = new Heroi ("Batman", 100, "20kmh", "25");

    Batman.esconder = 0;
    Batman.investigar = () => {
        return "O Batman está investigando um crime";
    }

    console.log(Batman.nome);
    console.log(Batman.vida);
    console.log(Batman.velocidade);
    console.log(Batman.forca);
    console.log(`O ${Batman.nome} ${Batman.esconder} não pode se esconder`);
    console.log(Batman.investigar());

    //////////////////////////////////////////////////////////////////////////////////////

    //Ex 02

    const exibirDataFutura = () => {
        const dataAtual = new Date();

        dataAtual.setDate(dataAtual.getDate()+3);
        dataAtual.setMonth(dataAtual.getMonth()+2);
        dataAtual.setFullYear(dataAtual.getFullYear()+1)

        
        const dia = String(dataAtual.getDate());
        const mes = String(dataAtual.getMonth() + 1);
        const ano = dataAtual.getFullYear();

        console.log(`${dia}/${mes}/${ano}`);
     };

   
     exibirDataFutura();
     
    //Ex 03
    
    const conversao = () => {

        let salario = 1500;

        const salarioDolar = salario * 0.176;
        const salarioEuro = salario * 0.16;

        console.log(`O salario de R$${salario} em dolar é: `);
        console.log(salarioDolar.toLocaleString("en", {style: "currency", currency:"USD"}));
        console.log(`O salario de R$${salario} em euro é: `)
        console.log(salarioEuro.toLocaleString("en", {style: "currency", currency:"EUR"}));
    };

    conversao();

    //Ex 04

    const mostrarNomes = () => {

        const nome = "Ricardo Estevam Silva Conceição"

        console.log(nome.toUpperCase());
        console.log(nome.toLocaleLowerCase());
        console.log(nome.length);

    }

    mostrarNomes();