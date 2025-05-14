//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

// Inicializa a soma e o contador
let soma = 0;
let contador = 0;
let numero;

// Loop para receber números decimais até que o usuário digite 0
do {
    numero = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));

    // Verifica se o número é diferente de 0
    if (numero !== 0) {
        soma += numero; // Adiciona o número à soma
        contador++; // Incrementa o contador
    }
}while (numero !== 0);

// Verifica se o contador é maior que 0 para evitar divisão por zero
if (contador > 0) {
    let media = soma / contador; // Calcula a média
    console.log(`A média aritmética dos números digitados é: ${media}`);
}