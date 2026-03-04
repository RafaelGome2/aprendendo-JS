
// const meuJson={
//  "nome" : "maria",
//  "idade": 25,
//  "email": "maria@gmail.com", 
//  "esta_trabalhando": true,
//  "hobbies":["correr","programar","arduino"]
// }
// console.log(meuJson, "json que criei");
// //converter objeto para json
// const jsontxt = JSON.stringify(meuJson);
// console.log(jsontxt);

// //converter json para objeto
// const jsonData = JSON.parse(jsontxt);
// console.log(jsonData);

//pegar dados do usuario
const form = document.querySelector('#form');
const campoNome = document.querySelector('#nome');
const campoCidade =document.querySelector('#cidade');
const campoEmail= document.querySelector('#email');
const campoCpf= document.querySelector('#cpf');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const input =[campoNome.value, campoCidade.value , campoEmail.value, campoCpf.value] ;
     
        const jsonTxt = {
        "nome" : input[0],
        "cidade" : input[1],
        "email": input[2],
        "cpf": input[3]
    }
   const jsonObj = JSON.stringify(jsonTxt);
   console.log(jsonObj);
})