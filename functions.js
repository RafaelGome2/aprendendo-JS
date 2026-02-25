function soma(valor1, valor2){
    return valor1+valor2;
    
}
document.getElementById("texto")
    .innerHTML="soma: "+ soma(1,100);

    //funçao cotação do dolar
    function realPdolar(real, cotaçaoDolar){
        return real * cotaçaoDolar;
                 
    var real = 50;
    var cotaçaoDolar = 5.18;
    var result = realPdolar(real, cotaçaoDolar );
    alert("o valor em reais= R$"+real
        + " e o valor em dollar = U$"+result.toFixed(2))
            }
   

        function eventoClik(){
    alert("acionou um evento de click")}

    function DbClik(){
        alert("evento de clik duplo")
            }

    function viraVermelho(){
        let obj= document.getElementById("div1");
        obj.style.backgroundColor = "red";
    }

    function viraAqua(){
        let obj = document.getElementById("div1");
        obj.style.backgroundColor = "aqua";
    }