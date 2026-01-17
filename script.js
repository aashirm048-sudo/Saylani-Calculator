var screenDiv = document.getElementById('input-screen')
var screenDiv = document.getElementById('screen')
function editscreen(data){
    if(data == 'AC'){
        screenDiv.value = ''
        return
    }
    if(data == 'C'){
        var len = screenDiv.value.length
        screenDiv.value = screenDiv.value.slice(0, len - 1)
        return
    }

    if(data == '='){
        try{
            screenDiv.value = eval(screenDiv.value)
        }catch(e){
            screenDiv.value = 'Error'
        }
        return
    }
    if(data == '%'){
        screenDiv.value = screenDiv.value / 100
        return
    }

    if(data == '+/-'){
        if(screenDiv.value.startsWith('-')){
            screenDiv.value = screenDiv.value.slice(1)
        }else{
            screenDiv.value = '-' + screenDiv.value
        }
        return
    }

    screenDiv.value += data
}





    



