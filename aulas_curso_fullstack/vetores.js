
// Estrutura de Dados
// Vetores -> array

var cidade = ["Curitiba", "Colombro", "Pinhais"];

cidade.push("Araucaria")
cidade.unshift("Campo Largo")
cidade.pop("Araucaria")

// Retornar a cidade na posição
cidade[1];

// loops -> laço de repetição
var ini = 1;
var fim = 10;

while (ini <= fim) {
    console.log(ini);
    ini = ini + 1;
}

// Invertido
var ini = 10;
var fim = 1;

while (ini >= fim) {
    console.log(ini);
    ini = ini - 1;
}

function listar() {
    var ini = 0;
    var fim = cidade.length - 1;

    var res = "<ul>";
    while (ini <= fim) {
        res = res + "<li>" + cidade[ini] + "</li>"
        ini = ini + 1;
    }

    res = res + "</ul>"

    resultado.innerHTML = res;
}

function botaoadd() 
{
    var texto = nome.value.trim();

    if (cidade.includes(texto) == false) {
        cidade.push(texto);
        listar();
    }

    else {
        alert("Você não pode clonar uma cidade")
    }
}

function ordem()
{
    cidade.sort();
    listar();
}
