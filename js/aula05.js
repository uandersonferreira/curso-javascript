// OBJETOS EM  JAVASCRIPT

//Criar Objetos
//Chave : valor
let pessoa = {
    nome    : "João",
    idade   : 40,
    peso    :83.5,
    altura  :1.80,
    doador  :false,
}

let produtos = {
    descricao : [],
    preco: []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo: ['Mustang', 'Camry', 'Citroen'],
    cor   : ['Black', 'Blue', 'Red'],
    ano   : [1999, 2005,2010] 
}

//Como acessar uma propriedade de um objeto
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
//Acessar uma propriedade de um objeto usando ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

// OPERAÇÃO IMC = peso/(altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//.toFixed(x)
//limita o número de casas decimais
console.log("IMC: "+imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de uma propriedade
pessoa.nome = "uanderson ferreira"
produtos.descricao = ['Arroz']
produtos.preco = [10.0]

produtos.descricao = ['Bolo']//Irá Sobreescrever o 'Arroz'

//Usando spreed operator para add sem sobreescrever o objeto do Array
produtos.descricao = [...produtos.descricao, 'Farinha', 'Feijão']
produtos.preco = [...produtos.preco, 9.99, 6.65]

carros.marca = [...carros.marca, 'WS']