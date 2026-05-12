console.log('---------=relatorio da fila------')
for(let i=0 i<idades .length;i++){
    let idade = [i];
    let status="";

    if(idade <18){
        status ="barrado - menor e idade";

    }else if(idade>=18 && idade<=21){
        status="pista normal- pulseira azul";

    }else{
        status= "vip-puleira dourada ";

    }
    console.log (`pessoa${i+1} (idade: ${idade}):${status}`);

}
