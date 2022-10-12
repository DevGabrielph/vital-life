var homee=document.querySelector('#home')
var vital= document.querySelector('#vital-life')
var unidade=document.querySelector('#unidades')
var serviço= document.querySelector('#serviços')
function home(){
       if(homee.style.display='none'){
        homee.style.display='block'
        vital.style.display='none'
        unidade.style.display='none'
        serviço.style.display='none'
    }
} 
function vitalLife(){
    if(vital.style.display='none'){
        vital.style.display='block'
        homee.style.display='none'
        unidade.style.display='none'
        serviço.style.display='none'


    }

}
function unidades(){
    if(unidade.style.display='none'){
        unidade.style.display='block'
        homee.style.display='none'
        vital.style.display='none'
        serviço.style.display='none'


    }

}
function serviços(){
    if(serviço.style.display='none'){
        serviço.style.display='block'
        homee.style.display='none'
        unidade.style.display='none'
        vital.style.display='none'


    }

}