let teacher = prompt("What`s your name?")
let stdn = document.getElementById('name')
let stdi = document.getElementById('id')
let crs = document.getElementById('course')
let cls = document.getElementById('class')
let hwg = document.getElementById('hw')
let tst = document.getElementById('ts')
result = ''


tcr.innerHTML = `${teacher}`

function calc(){
    if(stdn.value== '' || stdi.value == ''){
        res.innerHTML = `Fill the student data`
    }else if(crs.value == '' || cls.value == ''){
        res.innerHTML = `Fill the student class data`
    }else if(hwg.value == '' || tst.value == ''){
        res.innerHTML = `Fill the student grade data`
    }else{
        var hw = Number(hwg.value)
        var ts = Number(tst.value)
        result = Number((hw + ts)/2)
        //res.innerHTML = `Nota ${result}`
        if(result < 7){
            res.innerHTML = `The Student ${stdn.value} was resproved with grade = ${result}`
        }else{
            res.innerHTML = `The Student ${stdn.value} was Approval with grade = ${result} Congrats!!`
        }
    }
}




