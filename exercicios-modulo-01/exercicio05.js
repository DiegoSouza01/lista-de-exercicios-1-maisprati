//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

// Função para calcular o IMC
function calcularImc(peso, altura) {
    return (peso / (altura * altura));
}

// Recebe o peso e a altura do usuário
let altura = Number(prompt('Digite sua altura (em metros): '));
let peso = Number(prompt('Digite seu peso (em kg): ')); 

// Calcula o IMC
let imc = calcularImc(peso, altura);

// Determina a categoria de peso
let categoria;
if (imc < 21) {
    categoria = 'Baixo peso';
} else if (imc >= 21 && imc < 30) {
    categoria = 'Peso normal';
} else if (imc >= 30 && imc < 60) {
    categoria = 'Sobrepeso';
} else {
    categoria = 'Obesidade';
}

// Exibe o resultado
console.log(`Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}`);

