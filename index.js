const lista=["arroz", "cafe", "feijao", "açucar","sol","lua","outro item","marcos","paulo"];
const numeros =[1,3,65,88,79,12,1,10,0,66,47,52,3,5];
console.log(lista);

lista.splice(2,0,"adicionado 1", "adicionado2");   


// ordem alfabetica
let ListaOrdenada= lista.sort();
//document.getElementById("texto").innerHTML = ListaOrdenada;

// metodo join
let listaJoin =lista.join("$");

// função para achar maior valor de uma array de numeros
function maiorNumero(array){
    return Math.max.apply(null,array);
    }
// menor valor de uma array de numeros
function menorNumero(array){
    return Math.min.apply(null,array);
    }
    //document.getElementById("texto").innerHTML = menorNumero(numeros);

    let numerosFilter= numeros.filter(value>5);
  document.getElementById("texto").innerHTML = numerosFilter;
