/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 01 - Objetivo:
        Fortalecer os conceitos de: Variáveis, Condicionais e Operadores.
*/

// Cálculo de aposentadoria
const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 25

if((sexo == 'M' && contribuicao >= 35) || (sexo == 'F' && contribuicao >= 30)){
    if((sexo == 'M' && (contribuicao+idade) >= 95) || (sexo == 'F' && (contribuicao+idade) >= 85)){
        console.log(`${nome}, você pode se aposentar`)
    } else{
        console.log(`${nome}, você não pode se aposentar`)
    }
}else{
    console.log(`${nome}, você não pode se aposentar`)
}
