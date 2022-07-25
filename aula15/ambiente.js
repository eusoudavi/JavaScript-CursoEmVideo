var num = [5, 2, 3]

num[3] = 6 // acrescentando o número 6 na posição 3... como não tinha essa posiçõa, o programa irá criar
num[3] = 7 // acrescentando o número 7 na posição 3... como a posição já tinha, o programa vai sobrescrever
num.push(8) // acrescentando o número 8 na última posição do Array

console.log(num)
console.log(`Nosso vetor é o ${num}`)

console.log(`O tamanho do ARRAY é ${num.length}`) // mostrando como pegar o tamanho do vetor

console.log(`Se tiver o valor 2, ele vai estar na posição ${num.indexOf(2)}`)
console.log(`Se tiver o valor 9, ele vai estar na posição ${num.indexOf(9)}`)

var arrumado = num.sort()
console.log(`Com o comando sort() nós colocamos os números em ordem crescente e nosso vertor ficará ${arrumado}`)


// ESTRUTURA DE REPETIÇÃO COM VARIÁVEL COMPOSTA - ARRAY
for (var pos = 0; pos < num.length; pos ++) {
    console.log(num[pos])
}
console.log('simplificando...')

// SIMPLIFICANDO...
for (var posicao in num) {
    console.log(num[posicao])
}