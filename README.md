# JavaScript
 Curso completo de JavaScript


 window.alert('') - esse tipo de comando serve para gerar um alerta no navegador;

 window.confirm('') - esse tipo de comando serve para gerar uma caixa de confirmação no navegador;

 window.prompt('') - esse tipo de comando serve para gerar uma caixa de testo para o usuario digitar;

 // ou /**/ servem para gerar comentarios, no caso de comentarios maiores do que uma linha se usa o /**/

 // serve para comentarios em uma linha;

* Identificadores, podemos começar com letra, $ ou _ as variaveis;

* Não pode iniciar com números;

* É possível utilizar letras e números juntos;

* É possível utilizar acentos e símbolos;

* Não pode haver espaços;

* Não pode usar palavras reservadas;

# Dicas de como escolher variaves:

- Maiúsculas e minúsculas fazem diferença;

- Tente escolher abreviações coerentes  ou nomes coerentes para as variaveis;

# TIPOS PRIMITIVOS:

(Data type) -> typeof

* Number

    - Infinity

    - NaN

* String

* Boolean

* Null

* Undefined

* Object

    - Array

* Function

var nome = window.prompt('Qual é seu nome?')
window.alert('É um grande prazer te conhecer, '+ nome)

+ tem a função de concatenação nesse caso

# PARA MUDAR O TIPO DE VARIAVEL DE STRING PARA REAL OU INTEIRO USAMOS O COMANDO:

* Number.parseInt() - para transformar em inteiro;
* Number.parseFloat() - para transformar em real;

Mas podemos ignorar essas duas configurações e usar apenas Number()

# PARA MUDAR O TIPO DE VARIAVEL DE NUMBER PARA STRING PODEMOS USAR O COMANDO:

* n.toString()

ou String(n)

# SE USARMOS `` ELA NOS PERMITE USAR TEMPLATE STRING

var nome = 'Estevão'

var idade = '26'

var nota = '10.0'

em vez de usar 

'O aluno ' + nome + ' com ' + idade + ' anos de idade tirou a nota '+ nota

usamos `O aluno ${nome} com ${idade} anos de idade tirou ${nota}` e obtemos a mesma resposta do codigo de cima;

Os comandos .length e .toUpperCase() serve para dizer quandos caracteres a string possui e a segunda transforma todas as letras em 'MAIÚSCULAS'.

toLowerCase() transforma todas as letras em 'minúsculas'.

# PARA COLOCAR CASAS DECIMAIS PODEMOS USAR ESSE COMANDO:

* n1.toFixed(n) \\ número de casa decimais - n

* n1.toFixed(n).replace('.' ,  ',') \\ conseguimos substituir o ponto pela virgula;

* n1.toLocaleString('pt-BR', {style: 'currency, currency: 'BRL'}); <!-- esse codigo serve para colocar a moeda nos valores (real) -->

n1.toLocaleString('pt-BR', {style: 'currency, currency: 'USD'}) \\ para colocar em dolar;

n1.toLocaleString('pt-BR', {style: 'currency, currency: 'EUR'}) \\ Euro;

