//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

// Lê um número inteiro do usuário
let numero = parseInt(prompt('Digite um número inteiro: '));

// Verifica se o número é um inteiro
if (isNaN(numero)) {
  console.log('Por favor, digite um número inteiro válido.');
} else {
  // Exibe o número 10 vezes
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}