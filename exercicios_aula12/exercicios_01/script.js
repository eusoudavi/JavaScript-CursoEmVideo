// VERIFICADOR DE IDADE

// [INPUT]
// Coletar do usuário o ano de nascimento
    // Utilizar um input
// Coletar do usuário o sexo
    // Utilizar seletor entre Masculino e Feminino

// [PROCESSAMENTO]
// Calcular a idade
// Detectar se a pessoa não preencheu alguma lacuna
// Impedir que o usuário marque duas opções
// Colocar um botão para verificação

// [OUTPUT]
// Mostrar uma imagem conforme o sexo e a idade da pessoa

var nascimento = document.getElementById('anoQueNasceu')
var sexoMasc = document.getElementById('Masc')
var sexoFem = document.getElementById('Fem')

function marcaUm() { // VALIDAÇÃO DA ENTRADA DO SELETOR DE GENERO
    if (sexoMasc.checked == true && sexoFem.checked == true){
        sexoFem.checked = false
        sexoMasc.checked = false
    };
    if (sexoMasc.checked == false && sexoFem.checked == false){
        window.alert('SELECIONE APENAS UMA OPÇÃO')
    } ;
};

function verificar() {
    var anoAtual = new Date()
    var idade = anoAtual.getFullYear() - nascimento.value;
    var resuldadoDoTexto = document.getElementById('saidaIdade')
    var resultadoDaImagem = document.getElementById('saidaImagem')

    // VERFICAÇÃO SE TODOS OS DADOS NECESSÁRIOS FORAM ENTREGUES
    if (nascimento.value == '') {
        window.alert('Coloque o ano que você nasceu')
        return
    } else if (sexoMasc.checked == false && sexoFem.checked == false){
        window.alert('Selecione o seu sexo')
        return
    };

    if (idade <= 0 || idade > 150) { // VALIDAÇÃO DO DADO ENTREGUE DA IDADE
        window.alert('Digitei o valor do ano certo!')
        return
    } else if(sexoMasc.checked == true){ // SELEÇÃO DA IMAGEM PARA O HOMEM
        resuldadoDoTexto.innerText = `A sua idade é ${idade} anos`
        if(idade < 18){
            resultadoDaImagem.src = 'menino.png'
        } else if(idade >= 18 && idade < 50){
            resultadoDaImagem.src = 'homem.png'
        } else if(idade >= 50){
            resultadoDaImagem.src = 'velho.png'
        }
    } else { // SELEÇÃO DA IMAGEM PARA MULHER
        resuldadoDoTexto.innerText = `A sua idade é ${idade} anos`
        if(idade < 18){
            resultadoDaImagem.src = 'menina.png'
        } else if(idade >= 18 && idade < 50){
            resultadoDaImagem.src = 'mulher.png'
        } else if(idade >= 50){
            resultadoDaImagem.src = 'senhora.png'
        }
    } 
    // alert(`A sua idade é ${idade} anos`)
};

