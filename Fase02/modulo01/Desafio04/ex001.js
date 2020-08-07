/*
    Fase 02 - Módulo 01: Introdução à programação WEB

    Desafio 04 - Objetivo:
        Fortalecer os conceitos de: Booleanos, Organização, Padronização, Escrita.

*/

//Transções Bancárias
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

// Adicionar transações 
function createTransaction(transaction){
    user.transactions.push(transaction)
    
    if(transaction.type == 'credit'){
        user.balance += transaction.value
    } 
    else if((transaction.type == 'debit')){
        user.balance -= transaction.value
    }
}

//Relatórios
function getHigherTransactionByType(tipo){
    let maior = 0
    let teste 

    for(let valor = 0; valor < user.transactions.length; valor++){
        let type1 = user.transactions[valor].type
        let valor1 = user.transactions[valor].value

        if(tipo == type1 && valor1 > maior){
            maior = valor1
            teste = user.transactions[valor]   
        }
    }
    console.log(teste)
}

function getAverageTransactionValue(){
    let soma = 0
    for(let valor = 0; valor < user.transactions.length; valor++){
        soma += user.transactions[valor].value
        media = soma/user.transactions.length
    }
    console.log(media)
}

function getTransactionsCount(valor){
    var qnt_credit = 0
    var qnt_debit = 0
    
    for(let valor = 0; valor < user.transactions.length; valor++){
        if(user.transactions[valor].type == 'credit'){
            qnt_credit += 1 
        }
        else if(user.transactions[valor].type == 'debit'){
            qnt_debit += 1 
        }
    }
    let res = {credit: qnt_credit, debit: qnt_debit}
    console.log(res)
}


createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()
getTransactionsCount()
