//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

// Solicita ao usuário a quantidade de maçãs compradas
let quantidadeMacas = parseInt(prompt('Digite a quantidade de maçãs compradas: '));

// variável para armazenar o preço por maçã
let precoPorMaca;

// Verifica se a quantidade de maçãs é menor que 12
if (quantidadeMacas < 12) {
    precoPorMaca = 0.30; // Preço por maçã se menos de 12
} else if (quantidadeMacas >= 12) {
    precoPorMaca = 0.25; // Preço por maçã se 12 ou mais
} else {
    console.log('Quantidade inválida');
}

// Calcula o valor total da compra
let valorTotal = quantidadeMacas * precoPorMaca;

// Exibe o valor total da compra
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);

