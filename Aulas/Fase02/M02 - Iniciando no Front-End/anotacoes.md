<h1 align="center">  Bootcamp | LaunchBase | Aulas | Anotações </h1>

## Fase 02
### Módulo 02 - Iniciando o Front-end

Nessa fase vamos aprender o que é Front-end e como podemos fazer uma página web onde organizaremos um portfólio. Vamos conhecer e praticar HTML, CSS e Javascript no Front-end.

* **Ferramentas**: HTML, CSS, Javascript, Emmet
 
    ### Aula 2.1 - Primeiro projeto com HTML e CSS
1. O que é Back-end e Front-end?
* Cliente e Servidor 
  - Cliente -> Front-end
  - Servidor -> Back-end
  - Comunicação HTTP

2. Iniciando no HTML
* Tags
   - head = Coleção de metadados
   - title = título da página;
   - body = "corpo" da página.
   - header = cabeçalho
   - div = "caixa" que agrupa elementos semelhantes
   - a = links 
      -> href = atributo (caminho)
      -> target="_blank" -> Abre a página em outra aba

3. Desenvolvendo com Live Server
* Abrir com Live Server:
   - Ctrl + Shift + p

* Inicia o servidor em uama porta / localhost

4. Iniciando com CSS
* Tag style
* Usa seletores css;
   Seletor que "pega" tudo do navegador: *

    ### Aula 2.2: Menu do site

1. Criando estrutura do menu com HTML
* Atributo classe = "class=nome_class"
* Seletor CSS classe = ".nome_class"

2. Espaçamento com CSS
* Box Model: Limites dos elementos
    - padding: Espaço interno do elemento preenchido;
    - border: bordas/ limites do elemento;
    - Margin: Espaçamento externo do elemento;

* Shorthand: 
    - margin: 1px => Todas as direções;
    - margin: 1px 2px => 1px em top e bottom / 2px laterais
    - margin: 1px 2px 3px => top - laterais - bottom 
    - margin: 1px 2px 3px 4px => top - right - bottom - left

4. 
* text-align: alinhamento de textos
* font-size: Tamanho da fonte;
* line-height: espaço da linha do texto;
* text-decoration: underline;

* google fonts
* elemento:hover -> ao passar o mouse ocorre uma ação
* transition: ocorre uma transição
   - transition: color 200ms





















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
