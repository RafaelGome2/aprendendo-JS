const carro={
    marca:"fiat",
    modelo: "Uno way 1.4",
    ano: "2015",
    cor:"branco",
}
let objtxt= JSON.stringify(carro);
//document.getElementById("p1").innerHTML=objtxt;

const meuJson={
 "nome" : "maria",
 "idade": 25,
 "email": "maria@gmail.com", 
 "esta_trabalhando": true,
 "hobbies":["correr","programar","arduino"]
}
console.log(meuJson, "json que criei");
//converter objeto para json
const jsontxt = JSON.stringify(meuJson);
console.log(jsontxt);

//converter json para objeto
const jsonData = JSON.parse(jsontxt);
console.log(jsonData);