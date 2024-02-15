
function gerar() { //JohnChk0
    let num = parseInt(document.getElementById('txtn').value);
    let tab = document.getElementById('seltab')
    if (num == 0 || isNaN(num)) {
        window.alert('teste')
    } else{
        let n = num
        let c = 1;
        while (c <= 10){
            let resultado = num * c;
            tab.innerHTML +=  `<option>${n} X ${c} = ${resultado}</option>`
            c++
        }
    }
}


function gerar() {
    let num = parseInt(document.getElementById('txtn').value);
    let tab = document.getElementById('seltab')
    if (num == 0 || isNaN(num) || tab == '') {
        window.alert('ERROR "numero invalido"')
    } else{
        tab.innerHTML = ''
        let n = num
        let c = 1;
        while (c <= 10){
            let item = document.createElement('option');
            item.text += `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}


