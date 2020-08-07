/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 03 - Objetivo:
        Fortalecer os conceitos de: Funções e métodos, estruturas de repetição, escopos;
*/

// Usuários e tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}