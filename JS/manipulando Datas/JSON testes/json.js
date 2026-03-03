const carro={
    marca:"fiat",
    modelo: "Uno way 1.4",
    ano: "2015",
    cor:"branco",
}
let objtxt= JSON.stringify(carro);
document.getElementById("p1").innerHTML=objtxt;