/*
    Desafio 1.1 - Cálculo de IMC
        - Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
        - Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
*/
//cconst nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30){
    //console.log(`${nome} você está acima do peso`)
} else{
    //console.log(`${nome} você não está acima do peso`)
}

/*
    Desafio 1.1 - álculo de aposentadoria
*/
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 37;

if((sexo=='F' && idade>=30) || (sexo=='M' && idade>=35) ){
    if(((contribuicao + idade  >= 85) && sexo=='F') || ((contribuicao + idade  >= 95) && sexo=='M')){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você não pode se aposentar!`)
    }
}else{
    console.log(`${nome}, você não pode se aposentar!`)
}