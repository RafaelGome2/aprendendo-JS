
function post(){
const url= 'http://localhost:8080/users';
        fetch(url, {

            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "Joao JavaScript",
                "email": "JS@gmail.com"
            
                
            }    
            )           
        });};

       async function getUsers(){
            const url= 'http://localhost:8080/users';
                   const resp= await fetch(url);
                   console.log(resp);
                   if(resp.status ===200){
                     const obj = await resp.json();
                        console.log(obj);

                   }
                    };
                
                
                

