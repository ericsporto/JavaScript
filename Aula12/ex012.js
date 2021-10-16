var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas >= 8 && horas < 12) {
    console.log('Bom dia!')
} else if (horas >= 12 && horas < 18) {
    console.log('Boa tarde!')
} else if (horas >= 0 && horas < 8) {
    console.log("Boa madrugada!")
} else {
    console.log("Boa noite!")
}