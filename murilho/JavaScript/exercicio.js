// 1

let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
let dobroDoNumero = numeros.map(n => n * 2)
console.log(dobroDoNumero)

//2

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros2)
let maiorQue5 = numeros2.filter(n => n > 5)
console.log(maiorQue5)

// 3

let primeiroNumeroMaior = [ 10, 25, 47, 58, 62, 79]
console.log(primeiroNumeroMaior)
let numeroMaiorPrimeiro = primeiroNumeroMaior.find(n => n > 50)
console.log(numeroMaiorPrimeiro)

// 4

let numeroNegativo = [10, -5, 7, 0, -3]
console.log(numeroNegativo)
let existeNumeroNegativo = numeroNegativo.some(n => n < 0)
console.log(existeNumeroNegativo)

// 5

let numerosMaioresQue2 = [1, 2, 3, 4, 5]
console.log(numerosMaioresQue2)
let existeMaiorQue2 = numerosMaioresQue2.every(n => n > 2)
console.log(existeMaiorQue2)

 // 6

let presencaDeNumero = [1, 3, 5, 7, 9, 10]
console.log(presencaDeNumero)
let temNumero7 = presencaDeNumero.includes(7)
console.log(temNumero7)