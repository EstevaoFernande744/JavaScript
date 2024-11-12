function contar() {
    let inicio = window.document.getElementById('itxtinicio')
    let fim = window.document.getElementById('itxtfim')
    let passo = window.document.getElementById('itxtpasso')
    let res = window.document.querySelector('div#res')

    /* Declarando as variaveis */

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        /* Transformando as valores obtidos nos inputs em caracteres númericos! */
        

        /* Caso não coloque o passou ou coloque ele menor igual a 0 */
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            P =1
        }

        if(i < f) {

        /* Vamos fazer o contador c receber o inicio(começar no inicio), caso o c sejá menor ou igual ao final ele vai se receber o valor dele mesmo mais o passo */
        for (let c = i; c <= f; c += p) {
            /* Contagem crescente */ 
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            for(let c = i; c >= f; c -= p) {
            /* Contagem decrescente */
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}