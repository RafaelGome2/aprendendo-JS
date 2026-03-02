    function ativar(){
        //document.getElementById("tempo").innerHTML ="começou a contar";
       //ativa a funçao apenas 1 vez quando der o tempo em milisegundos
      // let tempo= setTimeout(function(){
          //  document.getElementById("tempo").innerHTML='executou o setTimeout'
       // }, 5000);
         //   }

      tempo=setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma= parseInt(cronometro )+ 1;
        document.getElementById("tempo").innerHTML= +soma;
     },1000);
    }

       function parar(){
        clearInterval(tempo);
     }