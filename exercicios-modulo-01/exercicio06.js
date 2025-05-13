//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

// Função para verificar se os lados A, B e C formam um triângulo
function verificarTriangulo(a, b, c) {
    return (a < b + c && b < a + c && c < a + b);
}

// Função para determinar o tipo de triângulo
function tipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || a === c || b === c) {
        return 'Isósceles';
    } else if (a !== b && a !== c && b !== c) {
        return 'Escaleno';
    } else {

        // Caso não se encaixe em nenhum dos tipos
        return 'Não é um triângulo';
    }
}

// Recebendo os lados do triângulo do usuário
let ladoA = Number(prompt('Digite o valor do lado A: '));
let ladoB = Number(prompt('Digite o valor do lado B: '));
let ladoC = Number(prompt('Digite o valor do lado C: '));

//Verifica se os lados formam um triângulo
if (verificarTriangulo(ladoA, ladoB, ladoC)) {

    // Se formam um triângulo, determina o tipo
    let tipo = tipoTriangulo(ladoA, ladoB, ladoC);
    console.log(`Os lados formam um triângulo do tipo: ${tipo}`)
}