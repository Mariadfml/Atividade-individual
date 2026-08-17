
function pergunta1(resposta) {

    if (resposta == "gato") {

        document.getElementById("resposta1").innerHTML =
            " Correto! O gato mia.";

    } else {

        document.getElementById("resposta1").innerHTML =
            " Errado!";
    }
}



function pergunta2() {

    let animal = document.getElementById("animal").value;

   
    if (animal == "gato" || animal == "cachorro") {

        document.getElementById("resposta2").innerHTML =
            "🐾 Boa escolha!";

    } else {

        document.getElementById("resposta2").innerHTML =
            "Legal! Você gosta de outro animal.";

    }
}



function pergunta3() {

    let idade = Number(document.getElementById("idade").value);

    if (idade >= 10 && idade <= 100) {

        document.getElementById("resposta3").innerHTML =
            " Idade válida!";

    } else {

        document.getElementById("resposta3").innerHTML =
            " Digite uma idade entre 10 e 100.";

    }
}