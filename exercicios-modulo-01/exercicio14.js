//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

//Solicitar ao usuário um número
let numero = parseInt(prompt('Digite um número para calcular o fatorial: '));
let fatorial = 1;

//Verifica se o número é negativo
if (numero < 0) {
    console.log('Fatorial não definido para números negativos.');
} else {
    //Calcula o fatorial
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    //Exibe o resultado
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}