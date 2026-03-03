function interval(){
  var i=0;
var inter= setInterval (function(){
      
  console.log("testando setInterval, 2000ms");
  i++;
  console.log("i="+i);
if(i===5){
    clearInterval(inter);
    console.log("testando clearInterval");
  
}

  
     },1000)

}
 


/*function parar(){  
   clearInterval(inter);
    console.log("testando clearInterval");
}   */