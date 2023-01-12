const gerar = () => {
    let num = Number(document.getElementById("numero").value)
    let tabuada = document.getElementById("tabuada")
    if (num == 0 ) {
        alert("Por favor, digite um número!")
    } else {
        tabuada.innerHTML=``
        let c = 1
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${num} x ${c} = ${num * c}`
            tabuada.appendChild(item)
            c++
        }

        
    }
}
