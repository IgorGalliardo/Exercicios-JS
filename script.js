let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
let result = ''

function somar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1+n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `O resulta da soma = ${result}`
}
function subtrair(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1-n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `O resulta da subtracao = ${result}`
}
function multiplicar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1*n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `O resulta da multiplicacao = ${result}`
}
function dividir(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1/n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `O resulta da divisao = ${result}`
}
function limpar(){
    document.getElementById('n1').value=''
    document.getElementById('n2').value=''
    res.innerHTML = '...'
    res1.innerHTML = ''
}