/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 02 - Objetivo:
        Fortalecer os conceitos de: Objetos, vetores.
*/

// Construção e impressão de objetos

const empresa = {
    Nome: 'Rocketseat',
    Cor: 'Roxo',
    Foco: 'Programação',
    Endereço: {
        Rua: 'Rua Guilherme Gembala',
        Número: 260
    }
}

console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Número}`)