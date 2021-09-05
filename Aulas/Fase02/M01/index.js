/*  
    Fase 02
        Módulo 01 - Iniciando com Progração Web
*/

// Criação de variáveis
/*const nome = "Andressa"
console.log(nome)
*/

/* 
    Programa para calcular média 
    e enviar mensagem do cálculo da média 
*/

const aluno01 = "Andressa"
const aluno02 = "Carlos"
const notaAluna01 = 10
const notaAluno02 = 9.7
const media = (notaAluna01 + notaAluno02) / 2

if(media > 7){
    console.log(`Aprovado. Média ${media}`)
 } else{
    console.log(`Reprovado. Média ${media}`)
}

// Operadores de comparação
console.log(4 == '4') // == Igual a
console.log(4 === '4') // === Igual e do mesmo tipo
console.log(4 != '4') // != Diferente de
console.log(4 !== '4') // !== Diferente, inclusive do tipo

// Teste
/* Verificar se tem maior do que 18 anos */
idade=18
if(idade >= 18){
    console.log(`Maior de idade ${idade}`)
 } else{
    console.log(`Menor de idade ${idade}`)
}

// Operadores lógicos
console.log(4 == '4' && 5 == 5) // && Ambas verdadeiras = verdadeiro
console.log(4 === '4' && 4 == '4') // && Falsa e verdadeira = Falso
console.log(4 != '4' || 5 == 5) // || Falsa ou verdadeiro = Verdadeiro
console.log(4 != '4' || 4 === '4') // Falsa ou falsa = falsa
console.log(!(4 != '4')) // Nega false = true
console.log(!(4 == '4')) // Nega true = false


