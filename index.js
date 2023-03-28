const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('min')
const segundo = document.getElementById('seg')

const lancamento = "15 april 2023"

function countDown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()


    const segTotal = (dataLanc - hoje)/1000;

    const finalDias =  Math.floor(segTotal/60/60/24)
    const finalHoras = Math.floor(segTotal/60/60) % 24
    const finalMinutos = Math.floor(segTotal/60) % 60
    const finalSeg = Math.floor(segTotal) % 60 

    dia.innerHTML = finalDias
    hora.innerHTML = horaCerta(finalHoras)
    minuto.innerHTML = horaCerta(finalMinutos)
    segundo.innerHTML = horaCerta(finalSeg)

}

function horaCerta(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}
    

countDown();
setInterval(countDown, 1000)