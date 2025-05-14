//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')();

// Inicializa os primeiros dois números da sequência de Fibonacci
let a = 0;
let b = 1;
let fibonacci = [a, b];

// Gera os próximos 8 números da sequência
for (let i = 2; i < 10; i++) {
    let proximo = a + b;
    fibonacci.push(proximo);
    a = b;
    b = proximo;
}

// Exibe os números da sequência
console.log('Os primeiros 10 números da sequência de Fibonacci são:');
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}
console.log('Sequência de Fibonacci concluída! :3');