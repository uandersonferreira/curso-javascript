// MANIPULAÇÃO DO DOM

/*
DOM = Document Object Model

- Arvore com elementos desde o Browser, a 
Janela do Browser, o Documento e cada elemento html que formam os conteúdos

- navigator
- window
- location
- document -> html -> head e body
- history

- TUDO PARA O JAVASCRIPT É UM OBJETO

PARA MANIPULAR O DOM PRECISAMOS
- Indicar qual objeto será usado, depois
chamar um método(função) para selecionar ele,
seus dados, trazer informações, etc.

*/

/*
.querySelector() -> Retorna um elemento
.querySelectorAll() -> Retorna uma lista de elementos (NodeList)

Ambos seleciona com base na: tag(ex: h1), #id ou .class
*/
let titulo = document.querySelector('#titulo')
console.log(titulo.textContent)