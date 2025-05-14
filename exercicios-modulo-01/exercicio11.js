//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

// Solicita ao usuário 5 números
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

// Calcula a soma total
let somaTotal = 0;
for (let i = 0; i < numeros.length; i++) {
    somaTotal += numeros[i];
}

// Exibe a soma total
console.log(`A soma total dos números é: ${somaTotal}`);