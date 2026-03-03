var data = new Date();

console.log(data.getHours());

//comparar datas
let hoje = new Date();
let vencimento = new Date(2026,2,2,23,59);
if(hoje>vencimento){
    console.log("sua conta esta vencida!");
}
else{console.log("sua conta ainda não venceu")}