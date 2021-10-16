let num = [5,8,9,7,5,6,1]
console.log(`Nosso vetor é ${num}`)
/*for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/
for (let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}