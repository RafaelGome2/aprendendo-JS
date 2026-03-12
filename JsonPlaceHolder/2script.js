fetch('https://reqres.in/api/users',{
 method: 'post',
    headers:{
        'x-api-key':'reqres_70c58494b74144ba95efb55a5f918bd3',
            'Content-Type': 'application/json',
    } ,
    body: JSON.stringify({
        'name': 'Maria Green',
        'cpf': 123456,
        'cidade':'paranaguá'
  })})
.then(response=>{ return response.json();})
.then(json=>console.log(json))
   

