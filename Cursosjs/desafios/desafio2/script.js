// John Chk

//Styles
res.style.textAlign = 'center'


//Verificar idade e sexo
function verificar() {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const anoNasc = document.getElementById('txtano').value
    const res = document.getElementById('res');
 

    if (anoNasc.length == 0 || anoNasc > anoAtual){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        const radsex = document.querySelector('[name="radsex"]:checked').id
        const idade = anoAtual - Number(anoNasc)
        var img = document.createElement('img')
        
        if (radsex == 'mas'){
            genero = 'Homen'

            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'image/homen-criança.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'image/homen.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'image/homen.jpg')
            }else{
                img.setAttribute('src', 'image/homen-idoso.jpg')
            }

        }else if (radsex == 'fem') {
            genero = 'Mulher'

            
            if(idade >= 0 && idade <=10){
                // Criança
            }else if(idade < 21){
                // Jovem
            }else if(idade < 50){
                // Adulto
            }else{
                // idoso
            }

        }
        res.innerHTML = `Voce e um(a) ${genero} e sua idade e de ${idade} anos.`
        res.appendChild(img)
    }



}