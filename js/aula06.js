// Comentário em linha 
/*
    Comentário em  bloco
*/
let produto = 'Arroz'
let quantidade = 2
let precoUnitario = 4.99
let precoTotal =  quantidade * precoUnitario

document.write(`Preço Total R$ ${precoTotal} <br>`)
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

//Formatar Valor monetário no padrão BR
document.write(`preço Total ${precoTotal.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL'
})} <hr>`)

//CRIAR CONSTANTES
const nome = 'Uanderson Ferreira'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 7.5
let nota3 = 7.5
let notaFinal = nota1 + nota2 + nota3

document.write("Nota final "+ notaFinal + "<br>")

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pt-Br', {
    style: 'currency',
    currency: 'BRL'
}) + '<br>')
