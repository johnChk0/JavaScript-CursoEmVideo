function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12){
        img.src = 'imagens/Manha.jpg'
        document.body.style.background = '#c3d37d'
    }else if (horas >= 12 && horas < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'orange'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}


