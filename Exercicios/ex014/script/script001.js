function tabuada() {
    let numb = document.getElementById('inum')
    let tab = document.getElementById('selctab')

   /*  if(numb.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numb.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        */

        if(numb.value.length == 0 ){ //programa com for
                window.alert('Por favor, digite um número!')
            } else {
                 tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
                let n = Number(numb.value)
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.value = `tab${c}`
                tab.appendChild(item)
            }
        
    }
}