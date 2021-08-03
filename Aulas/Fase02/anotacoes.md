<h1 align="center">  Bootcamp | LaunchBase | Aulas | Anotações </h1>

## Fase 02
### Módulo 01 - Iniciando com Progração Web

Nessa fase vamos dar os primeiros passos na programação web. Conheceremos conceitos inicias para programar na linguagem JavaScript e vamos entender lógica de programação.

* **Ferramentas**: Javascript, Node.js
 
    ### Aula 1.1 - Iniciando com a programação web:
* O que é Programação? 
  - Passar instruções para o computador (algoritmos);
  - Softwares;
  - Linguagens: Desktop, Mobile, Web;

    ### Aula 1.2: Iniciando no JavaScript
* Criar Variáveis: 
  - const nome_var = "valor_var"

* Executar o arquivo JS:
  - Node: Motor da nossa máquina
  - caminho (apagar: /Users/andre/Desktop/LaunchBase-Desafios/LaunchBase_Desafios/Aulas/Fase02)
   ```bash
  node index.js
  ```
* Mostrar mensagem no terminal:
  ```bash
  console.log()
  ```
- 
    ### Aula 1.3: Comentários, Strings e Numbers
* Sintaxe em JavaScript:
* Comentários: 
  ```bash
      // Linha Única
      /* Múltiplas Linhas*/
  ```
 
* Template String
  ```bash
      `${}`
  ```

* Tipos de Variáveis
 - Strings / Numbers
   ```bash
      typeof nome_Var
    ```

    ### Aula 1.4: Fazendo cálculos com JavaScript

    ### Aula 1.5: Condicionais
* Sintaxe condicional:
   ```bash
      if (condiçãoTrue){
          ...
      } else{
          ...
      }
   ```
   
    ### Aula 1.6: Operadores relacionais e comparativos
* Operadores de Comparação:
   ```bash
          >= Maior igual a, <= Menor igual a
          == Igual a, === Igual e do mesmo tipo
          != Diferente de, !== Diferente, inclusive do tipo
          > Maior, < Menor
   ```
   
    ### Aula 1.7: Operadores lógicos e aritméticos
* Operadores lógicos
  - Agrupar operações
   ```bash
          &&: (E) Ambas condições devem ser verdadeiras
          ||: (OU) Uma das condições deve ser verdadeira
          ! : (Não) Nega uma condição
   ```

    ### Aula 2.1: Objetos
* Contém propriedades/funcionalidades (métodos)
   ```bash
          const objeto = {
              propriedade1:"valor1",
              propriedade2:"valor2",
          }
   ```
* Acessar as propriedades:
   ```bash 
          objeto.propriedade1
   ```

    ### Aula 2.2: Array
* Contém propriedades/funcionalidades (métodos)
   ```bash
          const array = ["pos0", "pos1", "...", "posn"]
   ```
* Acessar as pela posição do vetor:
   ```bash 
          array[0]
          array[1]
   ```
  ```
* Adicionar uma propriedade em um objeto que está na posição 0 do array:
   ```bash 
      array[0].propriedade = "valor"
   ```

    ### Aula 3.1: Funções e Métodos
* Reaproveitamento de código
* Sintaxe função:
   ```bash 
      function nome_func(parametro){
        return ...
      }
   ```

* Chamada da função:
   ```bash 
      nome_func(argumento)
      }
   ```

* Método:
   ```bash 
      console.log() // Console = Objeto ; Log = Função/Método ; (...) = argumentos
   ```

    ### Aula 3.2: Estrutura de repetição
* For
* Sintaxe função:
   ```bash 
      for(let i=0; i<10; i++){
        ...
      }
   ```
* Saber o tamanho de um vetor:
   ```bash 
      nameVetor.length
   ```

    ### Aula 3.3: Escopo
* Variáveis existem apenas dentro do escopo em que foram criadas
* Variáveis que são criadas no escopo global podem ser acessadas dentro de outros escopos
* Uma função existe acaba assim que acha um `return`

    ### Observações
```.join()``` = Junta todos os elementos de um array e retorna uma string
```.split()``` = Divide uma string em substrings através de um separador
```.replace(".", ",")``` = Troca um valor pelo outro

  ### Observações 2
```for ... of ``` = Loop em uma variável ou array
```for ... in ``` = Loop em um objeto
```indexOf("")``` = Verifica se há uma string em um array.
