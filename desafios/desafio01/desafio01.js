let nome = "Fedor Vladimirovich Emelianenko"
let nacionalidade = "Russo"
let idade = 44
let peso = 106
let altura = 1.83

document.write('<h2>Informações</h2> ')

document.write(`Lutador: ${nome} <br>`)
document.write(`Nacionalidade: ${nacionalidade} <br>`)
document.write(`Idade: ${idade} anos <br>`)
document.write(`Peso: ${peso} Kg <br>`)
document.write(`Altura: ${altura} m <br>`)


const dia = 10
const mes = 9
const ano = 2021
const frase = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."

const autor = "Aaron Swartz"

document.write('<h2>Frase do Dia </h2> ')

document.write(`${dia}/${mes}/${ano} <br>`)
document.write(frase + '<br>')
document.write(autor + '<br>')

let arrayMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']

document.write('<h2> Array de meses do Ano </h2>')
document.write(`${arrayMeses[0]}, ${arrayMeses[1]}, ${arrayMeses[2]}, ${arrayMeses[3]}, ${arrayMeses[4]} . . .`)

let jogo = {
    "nome": "Jogo de Pong",
    "criador": "Riot Games",
    "ano": "2009"
}

document.write('<h2> Objeto Jogo </h2>')
document.write(`Jogo: ${jogo.nome} <br>`)
document.write(`Desenvolvido por: ${jogo.criador} <br>`)
document.write(`Ano do Lançamento: ${ano}`)

