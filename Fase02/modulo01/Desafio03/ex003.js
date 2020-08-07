/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 03 - Objetivo:
        Fortalecer os conceitos de: Funções e métodos, estruturas de repetição, escopos;
*/

// Soma de despesas e receitas

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaSaldo(receitas, despesas) {
    soma_receitas = somaNumeros(receitas)
    soma_despesas = somaNumeros(despesas)
    saldo = soma_receitas - soma_despesas

    return saldo
}

function somaNumeros(numeros) {
    soma = 0

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }
    return soma
}

function PercorreUsuarios(usuarios){
    for (let j = 0; j < usuarios.length; j++){
        saldo_usuario = calculaSaldo(usuarios[j].receitas, usuarios[j].despesas)
        
        if(saldo_usuario < 0){
            console.log(`${usuarios[j].nome} possui saldo NEGATIVO de ${saldo_usuario.toFixed(2)}`)
        } else{
          console.log(`${usuarios[j].nome} possui saldo POSITIVO de ${saldo_usuario.toFixed(2)}`)
        }
    }
}

PercorreUsuarios(usuarios)
