let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})


usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrecy(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrecy(brlInput.value)
})


function formatCurrecy(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}  

function fixValue(value) {
    let fixedValue = value.replace(",", ".") 
    let floatValue = parseFloat(fixedValue) 

    if(floatValue == NaN){
        floatValue = 0
    }

    return floatValue
}

function convert(type) {
   if(type == "usd-to-brl"){
    let fixedValue = fixValue(usdInput.value)

    let result = fixedValue * dolar
    result = result.toFixed(2)

    brlInput.value = formatCurrecy(result)
   }

   if(type == "brl-to-usd"){
    let fixedValue = fixValue(brlInput.value)

    let result = fixedValue / dolar
    result = result.toFixed(2)

    usdInput.value = formatCurrecy(result)
   }
}  