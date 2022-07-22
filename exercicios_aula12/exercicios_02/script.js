// Pegar a hora atual
    // Função Date()
// Escrever na tela a hora atual
    // Definir onde será escrito no arquivo HTML - ID
    // Escrever na ID do HTML a frase com a hora atual
// Alterar o fundo do site [BODY] conforme a horário
    // Selecionar o elemento alvo - BODY
    // Acessar a propriedade de estilo do CSS do elemento alvo
    // Alterar a cor do fundo conforme o horário
// Colocar uma imagem de acordo com o horário
    // Selecionar elemento alvo - segunda div
    // Inserir um texto com o código HMTL da imagem
    // Alterar a SRC do HTML conforme a imagem desejada


var horaAtual = new Date()

var escrever = document.getElementById("horaAtual");
var foto = document.getElementById("imagem");
var fotoPostada
escrever.innerText = `Agora são ${horaAtual.getHours()} horas e ${horaAtual.getMinutes()} minutos`

horaTeste = horaAtual.getHours();
var fundo = document.body
if(horaTeste >= 6 && horaTeste < 12) {
    fundo.style.background = 'rgb(162, 212, 212)'
    fotoPostada = 'manha_red.png'
} else if (horaTeste >= 12 && horaTeste < 18) {
    fundo.style.background = 'rgb(236, 153, 44)'
    fotoPostada = 'tarde_red.png'
} else {
    fundo.style.background = 'rgb(17, 54, 156)'
    fotoPostada = 'noite_red.png'
};


foto.innerHTML = `<img src="${fotoPostada}" width="300" height="300">`

