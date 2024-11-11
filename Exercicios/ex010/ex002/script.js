function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var welcome = window.document.getElementById('welcome')
var data = new Date()
// var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 5) {
    // Boa madrugada!
    img.src = 'imagens/madrugada.png'
    welcome.innerHTML = '<h2> Boa Madrugada! </h2>'
    document.body.style.background = '#495a76'
} else if (hora >= 5 && hora < 12) {
    // Bom dia!
    img.src = 'imagens/manha.png'
    welcome.innerHTML = '<h2> Boa Dia! </h2>'
    document.body.style.background = '#84b3c7'
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde!
    img.src = 'imagens/tarde.png'
    welcome.innerHTML = '<h2> Boa tarde! </h2>'
    document.body.style.background = '#ea5f3e'
} else {
    // Boa noite!
    img.src = 'imagens/noite.png'
    welcome.innerHTML = '<h2> Boa Noite! </h2>'
    document.body.style.background = '#706553'
}

}