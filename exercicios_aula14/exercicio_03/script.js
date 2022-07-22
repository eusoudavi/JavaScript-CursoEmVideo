/* 
CONTADOR
Fazer um programa que possa ler no HTML o início de uma contagem, o fim e o passo.
O programa vai apresentar a contagem na tela separando os números com emotions

INTPUT
1. Início
2. Fim
3. Passo

PROCESSAMENTO
1. Calcular a progressão
2. Apresentar na tela a progressão

OUTPUT
1. Mostrar na tela a progressão com emotions separando os números
2. Colocar uma bandeira no final indicando que a progressão foi completamente calculada.
*/

// INPUTS
var inicio = document.getElementById('inicioContagem')
var fim = document.getElementById('finalContagem')
var passo = document.getElementById('passoContagem')



// FFV - Fail Fast Validations
function validar() {
    var inicioNumero = Number(inicio.value)
    var fimNumero = Number(fim.value)
    var passoNumero = Number(passo.value)
    var diferenca = fimNumero - inicioNumero
    
    // Coloquei a estrutura dentro de um else para que não fique
    // aparecendo na tela do usuário diversos avisos.
    
    if (inicio.value == '') {
        alert('O valor de início não foi preenchido - Vou colocar o número 0')
        inicio.value = Number(0)
    } else if (fim.value == '') { 
        alert('O valor do final da contagem não foi preenchido')
        return false
    } else if (passo.value == '' || passoNumero == 0) {
        alert('O valor do passo não foi preenchido - Preciso que você me passe um valor!')
        return false
    } else {
        return true
    }
}


function calcular() {
    var inicioNumero = Number(inicio.value)
    var fimNumero = Number(fim.value)
    var passoNumero = Number(passo.value)
    var resultado = document.getElementById('saida')
    resultado = ''

    if (validar(this.value)) {
        // Contagem crescente
        if (inicioNumero < fimNumero) {
            while (inicioNumero <= fimNumero) {
                resultado.innerHTML += `${inicioNumero} &#128073;&#127996`
                inicioNumero += passoNumero;
            }
        } else { // Contagem regressiva
            passoNumero = passoNumero * (-1)
            while (inicioNumero >= fimNumero) {
                resultado.innerHTML += `${inicioNumero} &#128073;&#127996`
                inicioNumero += passoNumero;
            }
        }
        resultado.innerHTML += `&#9989`
    } else {
        resultado.innerHTML = `<p>Vamos calcular uma progressão quando todos os dados estiverem corretos!</p>`
    }


}





