function verificar() {
    let corDigitada = document.getElementById("cor").value ;

switch (corDigitada) {
    case "vermelho":
        document.getElementById("textoDefault").innerHTML= ""
        document.body.style.backgroundColor = "red";
        break;
    case "amarelo":
        document.getElementById("textoDefault").innerHTML= ""
        document.body.style.backgroundColor = "yellow";
    break;

    case null:
    document.getElementById("textoDefault").innerHTML= "Digite uma cor";
    break;

    default:
        document.getElementById("textoDefault").innerHTML= "Cor nao autorizada!"
        break;
}
}
