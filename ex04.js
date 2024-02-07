const somar = (valor) => {
    if(valor === 0){
        return 0;
    }
    return valor + somar(valor - 1);
    
}

console.log (somar(0));