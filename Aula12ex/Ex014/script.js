function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var desejo = document.getElementById("desejo")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        // Bom dia
        img.src = "manhã.png"
        document.body.style.backgroundColor = "#e2cd9f"
        desejo.innerHTML = "<strong>Bom dia!</strong>"
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde
        img.src = "tarde.png"
        document.body.style.backgroundColor = "#b9846f"
        desejo.innerHTML = "<strong>Boa tarde!</strong>"
    } else {
        img.src = "noite.png"
        document.body.style.backgroundColor = "#515154"
        desejo.innerHTML = "<strong>Boa noite!</strong>"
        //Boa noite
    }
}
    