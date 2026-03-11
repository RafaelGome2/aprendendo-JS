// const url = 'https://reqres.in/api/users/2';
// fetch(url,{
//    method:'get',
//     headers:{
//         'accept':'application/json',
//         'x-api-key' :'reqres_70c58494b74144ba95efb55a5f918bd3'

//     }
// })
// .then((response)=>{return response.url;})

// .then((data)=>{
// console.log(data)})

var myImage = document.querySelector('#my-image');
fetch("provaECT2.png")
.then(function(response){
    return response.blob();
})
.then(function(blob){
 var objUrl= URL.createObjectURL(blob);
   console.log(objUrl);
  
});