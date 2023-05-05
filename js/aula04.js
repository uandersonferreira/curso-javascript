// ARRAYS
let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10,20,30)
let meses = ['Jan', 'Fev', 'Mar','Abr']
let test = Array(10)//Aloca posições conforme a necessidade

test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"

// ADICIONANDO NO FINAL push = empurre
produtos.push('Açucar')
codigos.push(40,50,60,70)
meses.push('Jun', 'Jul', 'Ago', 'Set')

//REMOVENDO do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONANDO NO inicio unshift 
produtos.unshift('Biscoitos','Uva')

// REMOVER NO inicio shift 
produtos.shift()

/*
REMOVER de um posição especifica - splice
posição inicial, quantos elementos serão removidos
0: 10
1: 20
2: 30
3: 40
4: 50
5: 60
res: Array(4) [ 10, 40, 50, 60 ]
*/
codigos.splice(1,2)

/*
COPIAR array slice = fatiar porção
posição inicial, qunatos copiar
0: "Jan"
1: "Fev"
2: "Mar"
3: "Abr"
4: "Jun"
5: "Jul"
6: "Ago"
meses -> Array(7) [ "Jan", "Fev", "Mar", "Abr", "Jun", "Jul", "Ago" ]
meses1 -> Array(7) [ "Jan", "Fev", "Mar", "Abr", "Jun", "Jul", "Ago" ]
meses2 -> Array(7) [ "Jan", "Fev", "Mar"]

*/
let meses1 = meses.slice()//copiar tudo
let meses2 = meses.slice(0,3)//copia 3 elementos 

// VER tamanho do Array length - comprimento
console.log(meses.length)
console.log(meses1.length)
console.log(meses2.length)

// Spreed Operator(Operador) ...
//... copia o conteúdo todo de um array
let teste = [...produtos, 'Ovo', 'Pera']
