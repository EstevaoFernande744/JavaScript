function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('itxtano')
    var res = window.document.querySelector('div#res')

    if (Number(fano.value).length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 5) {
                img.setAttribute('src', 'imagens/hbebe.png')
            } else if (idade < 14 ) {
                img.setAttribute('src', 'imagens/hcrianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/hadulto.png')
            } else {
                img.setAttribute('src', 'imagens/hidoso.png')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 5) {
                img.setAttribute('src', 'imagens/mbebe.png')
            } else if (idade < 14 ) {
                img.setAttribute('src', 'imagens/mcrianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/madulta.png')
            } else {
                img.setAttribute('src', 'imagens/midoso.png')
            }
              
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos que você é um(a) ${genero} com ${idade} anos.` 
        res.appendChild(img)
    } 


}