/*
    FUNÇÕES ASSÍNCRONAS 

        Implemente uma função que receba como parâmetro um número e, após x milissegundos (dentre um intervalo de 1 a 100 ms. 
        Utilize o setTimeout e as funções floor e random da biblioteca Math), mostre no console o dobro do parâmetro recebido. 
        Em seguida, chame essa função 5 vezes. Ex.:

        function printDouble(number){
          setTimeout(
            () => {
              console.log(number * 2)
            }, 
            Math.floor(Math.random() * 100) + 1
          )
        }

        function printAll(){
          printDouble(5)
          printDouble(10)
          printDouble(22)
          printDouble(1)
          printDouble(89)
        }

    printAll()

    Sem realizar nenhum tratamento, é fácil perceber que a ordem dos valores  mostrados no console ao chamar a função printALL() é aleatória e não
    respeita a ordem de chamada das funções. Portanto, para resolver esse problema, trate o assincronismo do setTimeout utilizando callback, Promise e async/await.

    (Dica: no tratamento com Promise, faça o retorno de uma nova Promise e utilize o parâmetro resolve).
*/

// Funções Assíncronas || Mini-desafio 01
function printDouble(number){
    return new Promise(resolve => {       
      setTimeout(
        () => {
            resolve(console.log(number * 2))
        }, Math.floor(Math.random() * 100) + 1)
    })
}
 
async function printAll(callback){
    await printDouble(5)
    await printDouble(10)
    await printDouble(22)
    await printDouble(1)
    await printDouble(89)

}
//printAll(printDouble)    // Retirar o comentário  


/*
    Agora, altere um pouco sua função. Serão passados dois parâmetros, o primeiro será o valor a ser dobrado 
    e o segundo o valor a ser somado ao dobro do primeiro. Além disso, em vez de mostrar o resultado no console, 
    retorne-o e o repasse na chamada da função seguinte, por exemplo:

    let result;

    result = funcao(5, 0); // retorna 10
    result = funcao(12, result); // retorna 34
    result = funcao(2, result); // retorna 38

    Por fim, faça novamente o tratamento desse assincronismo utilizando utilizando callback, Promise e async/await.
*/

// Funções Assíncronas || Mini-desafio 02
function printDoubleSum(numberDouble, numberSum){
    return new Promise(resolve => {       
      setTimeout(
        () => { 
            resolve(
                (numberDouble * 2 + numberSum)
            )}, Math.floor(Math.random() * 100) + 1)
    })
}

async function printResult(){ 
   
    let result = await printDoubleSum(5, 0)    // retorna 10
    console.log(result)
    result = await printDoubleSum(12, result)  // retorna 34
    console.log(result)
    result = await printDoubleSum(2, result)   // retorna 38
    console.log(result)
}
//printResult()    // Retirar o comentário  

/*

	  Máscaras de input

	  Implementar duas máscaras de input:

    	Número percentual com no mínimo duas casas após a vírgula e no máximo 4 (Utilize o NumberFormat da biblioteca Intl);
      CPF (xxx.xxx.xxx-xx).
      
*/

// Máscaras de input || Mini-desafio 03
const Mask = {
    apply(number, func){
        number = Mask[func](number)
    },
    // Responsável por formatar o número percentual
    formatPercent(number){
        number = new Intl.NumberFormat('pt-br', {style:'percent', minimumFractionDigits: 2, maximumFractionDigits: 4}).format(number)
        console.log(number)
	},
    // Responsável por formatar o CPF
    formatCPF(numberCPF){
      var cpf = numberCPF.replace(/\D/g, "")
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      console.log(cpf) 
  }
}

// Podem ser chamadas também pelo input
Mask.apply('0.128', 'formatPercent')
Mask.apply('j00jiejifjeifjijv00000fvjenrjqn0000', 'formatCPF')