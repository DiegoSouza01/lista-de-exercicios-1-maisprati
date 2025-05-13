//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente

const prompt = require('prompt-sync')();

// Solicita ao usuário os dois valores
let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
let valor2 = parseFloat(prompt('Digite o segundo valor: '));

// Verifica se os valores são iguais
if (valor1 === valor2) {
    console.log('Os valores não podem ser iguais.');
} else {
    // Verifica a ordem dos valores e os exibe em ordem crescente
    if (valor1 < valor2) {
        console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
    } else {
        console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
    }
}