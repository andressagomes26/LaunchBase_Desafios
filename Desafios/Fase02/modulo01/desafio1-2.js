/*Desafio 1-2: Lidando com objetos e vetores*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Vetores e objetos
/*Desafio 1-2: Lidando com objetos e vetores*/

const programador = {
    nome: "Carlos",
    idade: 25,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop'},
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

for (const i in programador.tecnologias) {
    console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[i].nome} com especialidade em ${programador.tecnologias[i].especialidade}`)
}
