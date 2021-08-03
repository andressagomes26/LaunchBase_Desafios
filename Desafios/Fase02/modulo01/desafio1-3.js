/*
    Desafio 1-3: Funções e estruturas de repetição
        Desafios para fortalecer alguns conceitos, entre eles:
            - Funções e métodos;
            - Estruturas de repetição;
            - Escopos.
*/

// Usuários e tecnologias
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", " CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", " CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", " Node.js"] }
]

function defineUser(usuarios){
    for(i=0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
    }
}
//defineUser(usuarios)
  