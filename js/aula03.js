/*OPERADORES E OPERAÇÕES ARITMETICAS*/

let n1 = 10
let n2 = 2
let n3 = "2"

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

console.log("----------------")
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)

console.log("----------------")
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 <= n2)

console.log("----------------")
console.log(n2 == n3) //igual a  (2 = 2)
console.log(n2 === n3)// (Tipo, conteúdo) identico a (2 = "2")
console.log(n2 != n3) //diferente de -> Não é = (2 = 2)
console.log(n2 !== n3)// Não é identico (Tipo,conteúdo) (2 = "2")


let a = true
let b = false

console.log("----------------")
console.log(a && b)// E   AND
console.log(a && b)// OU  OR 
console.log(!a)   //NÃO   NOT negação 
console.log(!b)