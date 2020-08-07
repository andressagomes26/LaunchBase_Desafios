/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 01 - Objetivo:
        Fortalecer os conceitos de: Variáveis, Condicionais e Operadores.
*/

// Cálculo de IMC
const nome = "Carlos"
const peso = 84
const altura = 1.88

const imc = peso / (altura*altura)
/*
    O método .toFixed() -> controlar o número
    de casas decimais após a vírgula;
*/

if(imc >= 30){
    console.log(`${nome} você está acima do peso. IMC = ${imc.toFixed(2)}`)
} else {
    console.log(`${nome} você não está acima do peso. IMC = ${imc.toFixed(2)}`)
}
