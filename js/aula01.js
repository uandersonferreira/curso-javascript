/*
  - ARQUIVO JS EXTERNO
  // - Comentário em linha 
 /* - Comentário em bloco

 ;(ponto é virgula) - É opcional
 - O javaScript é Case sensitive

*/
document.write("Olá, mundo!");
console.log("Outro, olá mundo!");
//alert("Olá, mundo com Alerta!");

//CRIAÇÃO DE VARIAVEIS - VAR/LET
var mensagem = "mensagem qualquer";//var não é muito recomendável para criar variáveis
let mensagem2 = "mensagem qualquer";
let mensagem3 = 'outra mensagem'
let meuPeso = 68.6;
let minhaAltura = 1.68;
let minhaIdade = 20;
let isDoador = true;
let teste = null

//CRIAÇÃO DE CONSTANTES - CONST
const PI = 3.1415;
const TAXA = 0.5;

teste = "Algum conteúdo";

//ESCREVENDO O CONTEÚDO DE VARIAVEIS E CONSTANTES
document.write("<p> Mensagem: "+mensagem+"</p>")
document.write(`Mensagem2: ${mensagem2}`)
document.write("<p> Peso: "+meuPeso+" kg</p>")
document.write(`Altura: ${minhaAltura}`)
document.write("<p> Idade: "+minhaIdade+"</p>")
document.write(`Doador: ${isDoador}`)
document.write("<p> Teste: "+teste+"</p>")
document.write("<p> PI: "+PI+"</p>")
document.write("<p> TAXA: "+TAXA+"</p>")
