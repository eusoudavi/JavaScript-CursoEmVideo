var entrada = document.getElementById('tabuada')


function calcular() {
    var varloDaEntrada = Number(entrada.value)
    var resuldado = document.getElementById('mostraTabuada')
    resuldado.innerHTML = ``
    
    if (entrada.value == '') {
        alert('Não foi digitado nenhum valor para calcular a tabuada!')
        return
    } else {
        for(cont = 1; cont <= 10; cont += 1){
            // Tem que criar a variável aqui para que toda vez que print na tela, o programa coloque uma linha em baixo
            var itens = document.createElement('option')

            // console.log(`${cont} x ${varloDaEntrada} = ${cont*varloDaEntrada}`)
            // Uma opção é escrevermos o texto HTML assim:
            // resuldado.innerHTML += `<option>${cont} x ${varloDaEntrada} = ${cont*varloDaEntrada}</option>`

            // MAS EU POSSO CRIAR UM ITEM OPTION AQUI NO JS
            itens.text = `${cont} x ${varloDaEntrada} = ${cont*varloDaEntrada}`
            resuldado.appendChild(itens)
        }
    }
}

