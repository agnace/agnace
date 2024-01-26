const QUANTIDADE = 6;

function numeroImpar(valor){
    let contar = 0;
    let novoValor = valor;
    while(contar < QUANTIDADE){
        if(novoValor % 2 !== 0){
            console.log(novoValor)
            contar++;
        }
        novoValor++;
    }
}
numeroImpar(8)