const lista=["arroz", "cafe", "feijao", "açucar","sol","lua","outro item"];

console.log(lista);

lista.splice(2,0,"adicionado 1", "adicionado2");   

document.getElementById("texto").innerHTML = lista.join(", ");
   
 