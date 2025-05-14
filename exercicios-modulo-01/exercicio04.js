//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require('prompt-sync')();

// Menu de opções
console.log('Escolha uma opção:');
console.log('1. Adição');
console.log('2. Subtração');
console.log('3. Multiplicação');

// Lê a opção escolhida pelo usuário
let opcao = prompt('Digite o número da opção desejada: ');

// Executa a ação correspondente à opção escolhida
switch (opcao) {
    case '1':
        console.log('Você escolheu Adição');
        let num1 = parseFloat(prompt('Digite o primeiro número: '));
        let num2 = parseFloat(prompt('Digite o segundo número: '));
        console.log(`Resultado: ${num1 + num2}`);
        break;
    case '2':
        console.log('Você escolheu Subtração');
        let num3 = parseFloat(prompt('Digite o primeiro número: '));
        let num4 = parseFloat(prompt('Digite o segundo número: '));
        console.log(`Resultado: ${num3 - num4}`);
        break;
    case '3':
        console.log('Você escolheu Multiplicação');
        let num5 = parseFloat(prompt('Digite o primeiro número: '));
        let num6 = parseFloat(prompt('Digite o segundo número: '));
        console.log(`Resultado: ${num5 * num6}`);
        break;
    default:
        console.log('Opção inválida');
}