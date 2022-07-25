/*
Nesse exercício vamos coletando valores (Number()) através de um input + botão
Vamos armazenando esses valores em um select

Vamos ter um botão para que o programa faça a análise
Ele vai entregar:
[] Número total de valores;
[] O maior valor;
[] O menor valor;
[] A soma de todos os valores;
[] A média de todos os valores.
*/
var stack = [] // Pilha onde será armazenada as entradas
var tamanhoDaPilha = 0
var cont = 0
var soma = 0
var show = document.getElementById('showResults')
var p = document.createElement('p')

function GuardaValor() {
    var entrada = document.getElementById('valor')
    var mostraValores = document.createElement('option')
    var resuldado = document.getElementById('valoresGuardados')
    // Toda vez que adicionarmos um valor a ser analisado, precisamos
    // limpar a área onde está sendo printado os resultados
    p.innerHTML = ` `
    show.appendChild(p)

    if (isNum(validarEntrada(entrada.value))) {
        stack.push(validarEntrada(entrada.value))
        // console.log(`O valor digitado foi ${stack[cont]}`)
        // console.log(stack)
        mostraValores.text = `O valor digitado foi ${stack[cont]}`
        resuldado.appendChild(mostraValores)
        soma += stack[cont]
        cont ++
    } else {
        console.log('Houve um erro de validação')
        return
    }
    // Após o programa adicionar o valor na lista ou identificar o erro,
    // ele precisa apagar o valor que foi digitado no Input e deixar o 
    // curso na caixa para que possamos já adicionar outro valor
    num.value = ''
    num.focus()
}

function validarSaida() {
    var media = soma/stack.length

    if (stack.length > tamanhoDaPilha) {
        tamanhoDaPilha = stack.length
        p.innerHTML = `Foram digitados ${stack.length} valores <br>`
        p.innerHTML += `O maior valor digitado foi ${Math.max.apply(null, stack)} <br>`
        p.innerHTML += `O menor valor digitado foi ${Math.min.apply(null, stack)} <br>`
        p.innerHTML += `A soma de todos os valores digitados foi ${soma} <br>`
        p.innerHTML += `A média de todos os valores digitados foi ${media} <br>`
        show.appendChild(p)
    } else {
        p.innerHTML = `Não foi digitado nenhum valor novo!`
        show.appendChild(p)
    }
}

function validarEntrada(valor){
    var dado = Number(valor)

    if (dado == '') {
        window.alert('Não foi preenchido nenhum valor')
        return 'Não foi preenchido nenhum valor'
    } else if (dado > 100 || dado < 1 || dado == 0) {
        window.alert('Valor incorreto - Digite um valor entre 1 e 100')
        return 'Valor incorreto!'
    } else if (stack.indexOf(dado) != -1) {
        window.alert('O valor já foi digitado, por favor, digite outro valor!')
        return 'Valor repetido'
    } else {
        return dado
    }
}

function isNum(valor){
    return !isNaN(valor)
}