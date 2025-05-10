//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

//Crie uma variável para armazenar a nota
let nota = Number(prompt('Digite a sua nota (0 a 10): '));

//Verificação da nota
if (nota >= 0 && nota < 4) {
    console.log('Você foi reprovado');
} else if (nota >= 4 && nota < 7) {
    console.log('Você está de recuperação');
} else {
    console.log('Você foi aprovado');
}