
/*
let num = [5, 8, 2, 9 ,3]

console.log(num)
*/

// // // // // // // // // // // // // // // // // // // // //
/*
let num = [5, 8, 2, 9 ,3]
''
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0 ]}`)

*/
// // // // // // // // // // // // // // // // // // // // //
/*
let valores = [8, 1, 7, 4, 2, 9]

for(let pos=0 ; pos<valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
*/
// // // // // // // // // // // // // // // // // // // // //
/*

let valores = [8, 1, 7, 4, 2, 9]

for(let pos in valores){
    console.log(`O indice ${pos} tem o valor ${valores[pos]}.`)
}
*/
let num = [5, 8, 2, 9 ,3]
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`Este valor nao foi encontrado`)
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}

