//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

//Vamos criar uma variável para armazenar o número inteiro
let numero = Number(prompt('Digite um número inteiro: '));

//Vamos verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}
//Vamos testar o código