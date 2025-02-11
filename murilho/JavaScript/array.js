let frutas = ["Banana", "Maça", "Melão", "Morango", "Laranja", "Goiaba", "Pera"]
         //      0       1        2       3          4         5          6
console.log(frutas)

console.log(frutas[2])

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

for(let i = 0; i <= 10; i++) {
    console.log(`${i} x 2`, i *2)
}

// 1. MAP - Transformando cada elemento do array

let numeros = [10, 50, 30, 20, 60]
console.log("numeros originais", numeros)
let numerosMaisUm = numeros.map(n => n * 3)
console.log("numeros mais um", numerosMaisUm)

// 2. FIND - Encontrar o primeiro elemento que corresponde a condição
// Exemplo: Encontrar a primeira fruta que começa com M

let primeiroAlimentoComM = frutas.find(frutas => frutas.startsWith("M"))
console.log(primeiroAlimentoComM)

// 3. FILTER -Cria uma nova lista com os valores que corresponde a condição
// Exemplo: filtrar numeros menor que 50

let numerosMenoresQue50 = numeros.filter(n => n < 50)
console.log(numerosMenoresQue50);

//  4. INCLUDES - verifica se um elemento existe
// Exemplo: verifica se laranja existe no array de frutas

let temLaranja = frutas.includes("Laranja")
console.log(temLaranja)

// 5. SOME - verifica se pelo menos um elemento existe no array
// Exemplo: verifica se existe pelo menos um numero maior que 50

let numerosMaioresQue50 = numeros.some(n => n > 50)
console.log(numerosMaioresQue50)

// 6. EVERY - verifica se todos os elementos atendem a condição

 let todosOsNumerosSao10 = numeros.every( n=> n == 10)
 console.log(todosOsNumerosSao10)