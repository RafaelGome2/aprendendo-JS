// //utilizando o site https://jsonplaceholder.typicode.com para testar requisiçoes usando o Fetch()

// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then(response=>{
//     return response.json()
// })
// .then(json=>{console.log(json)})


//method: post
fetch('https://jsonplaceholder.typicode.com/posts',{
 method:'POST',

 body: JSON.stringify(
    {userId: 123,
    tittle:'meu titulo' ,
    body:'minha frase aqui', 
    }) ,
     headers:{
    'content-type':'application/json;charset=UTF-8',
 },})
   .then((response)=>    response.json()
   )
   .then((json)=>console.log(json))

