$(document).ready(function(){

    $("#bt-cadastro").click(function(){

        var nome = $("#nome").val();
        if (nome == "")
        {
            $("#nome").addClass("is-invalid");
        } 

    }); // Fim do botão

});