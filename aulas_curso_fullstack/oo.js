// Orientação a objetos e JSON

// Caneta BIC
// Função -> Metodo -> Escrever em Papel
// Atributo -> Cor da Tinta

var caneta = {
    cor: "Azul",
    QuantTinta: 100,

    escrever: function()
    {
        console.log("escreveu");
    }
};

// Chamar método
caneta.escrever();

// Alterando
caneta.cor = "Preto";

var pessoa = {
    cpf: "123",
    pertences: caneta
}

pessoa.pertences.escrever;