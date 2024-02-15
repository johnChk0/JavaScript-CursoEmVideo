function contar() {//JohnChk0
    const resultado = document.getElementById('resultado');
    const inicio = parseInt(document.getElementById('inicioid').value);
    const fim = parseInt(document.getElementById('fimid').value);
    const passo = parseInt(document.getElementById('passoid').value);

    if (isNaN(inicio)) {
        alert('ERROR: Você não preencheu o início.');
    } else if (isNaN(fim)) {
        alert('ERROR: Você não preencheu o Fim.');
    } else if (isNaN(passo)) {
        alert('ERROR: Você não preencheu o Passo.');
    } else if(passo === 0){
        resultado.innerHTML = 'O numero de passos não pode ser igual a 0'
    } else {
        resultado.innerHTML = ''
        /*Contagem crescente*/
        if (inicio < fim){
            for(let i = inicio; i < fim; i += passo){
                resultado.innerHTML += `${i}  \u{1F449}`
            }
        }else{
            for(let i = inicio; i > fim; i -= passo){
                resultado.innerHTML += `${i}  \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
    
}