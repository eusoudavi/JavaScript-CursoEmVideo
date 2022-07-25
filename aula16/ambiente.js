console.log('Exemplo 01')

function parOuImpar (parametro) {
    // Faz a verificação do parâmetro que foi passado lá na chamada
    if(parametro % 2 ==0) {
        // Se for divisível por 2, retorna PAR
        return 'par'
    } else {
        // Se não, retorna IMPAR
        return 'impar'
    }

}


// CHAMADA
// No lugar da chamada o programa vai entregar a resposta!
console.log(parOuImpar(3))

// ==========================

console.log('Exemplo 02')
// Podemos predefinir valores nos parâmetros para o caso em que a chamada não entregue todos os paramêtros necessários:
// Nessa função o n1 não está pré definido, logo o usuário é obrigado a fornecer esse valor,
// porém o n2 está pré definido e se o usuário não fornecer o valor, não haverá problemas.

function soma(n1, n2=0) {
    return n1 + n2;
}

console.log(soma(1, 2))
console.log(soma(5))

// ==========================

console.log('Exemplo 03')

// Podemos colocar uma função diretamente dentro de uma variável

var Funcao = function(x) {
    return x*2
}

console.log(Funcao(5))