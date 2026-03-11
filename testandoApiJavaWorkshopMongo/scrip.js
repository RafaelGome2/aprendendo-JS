
// aprendendo sobre Promises :https://www.youtube.com/watch?v=hhDSKhCEzzM&t=1781s
const { rejects } = require('assert');
const { resolve } = require('dns');

const fs = require('fs');

console.log(1);
// criaçao da Promise!!
const readFile= file=> new Promise((resolve, rejects)=>
{fs.readFile(file,(err, contents) => {
    if(err){
       reject(err) ;
    }else{
        resolve(contents);
     }
    }
 ) }
);

/*readFile('msg.txt').then(contents => {
    console.log(String(contents));
    return readFile('msg2.txt').then(contents =>{
        console.log(String(contents));
    })
})*/

const init = async()=>{};

console.log(init());
console.log(2);
console.log(3);

//fs.readFile('msg.txt',(err, contents)=>{
//     fs.readFile('msg2.txt',(err2,contents2)=>{
//          console.log(String(contents));
//          console.log(String(contents2 ));
//     })
    
// });


// const form = document.querySelector('#form');
// const nomeCampo = document.querySelector('#nome');
// const emailCampo = document.querySelector('#email');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
// const input ={name: nomeCampo.value, email: emailCampo.value};

// })
