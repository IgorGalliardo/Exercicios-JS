let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
let result = ''

function somar(){//function do do the sum
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1+n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `The result of sum = ${result}`
}
function subtrair(){//function to do the subtraction
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1-n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `The result of subtraction = ${result}`
}
function multiplicar(){//function to do the multiplication
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1*n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `The result of multiplication = ${result}`
}
function dividir(){//function to do the division
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    result = n1/n2
    //window.alert(`Os valores digitados foram n1=${n1} e n2=${n2} e a soma entre eles = ${result}`)
    res.innerHTML = ''
    res1.innerHTML = `The result of division = ${result}`
}
function limpar(){//function to clean the informations when you finish to use the calculator
    document.getElementById('n1').value=''
    document.getElementById('n2').value=''
    res.innerHTML = '...'
    res1.innerHTML = ''
}