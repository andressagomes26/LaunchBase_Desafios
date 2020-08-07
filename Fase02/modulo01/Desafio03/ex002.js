/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 03 - Objetivo:
        Fortalecer os conceitos de: Funções e métodos, estruturas de repetição, escopos;
*/

// Busca por tecnologia

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", 'CSS'] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
    let res = usuario.tecnologias
        
    if(res.indexOf('CSS') != -1){
        return true
    }
    else{
        return false
    }
}

for(i = 0; i < usuarios.length; i++){  
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
} 
