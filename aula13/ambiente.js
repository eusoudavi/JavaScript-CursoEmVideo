var c = 1
var resultado = document.getElementById('mostrandoNaTela')

while (c <= 10) {
    resultado.innerHTML = `Passo ${c}`
    
    console.log(`Passo ${c}`)
    c++
};

var conta = 1
do{
    console.log(`Novo passo ${conta}`)
    conta++
} while(conta <= 10)
