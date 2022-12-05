const container = document.querySelector('.carrusel-items')
const circulo = document.querySelector('.circulo1')
const dianas = document.getElementsByClassName('circulo1')
const puntos = document.querySelector('#contador')
let score = 0 

function obtenerArray() {
    arrayN = JSON.parse(localStorage.getItem('arrayNom'))
    console.log(arrayN.length)
}
obtenerArray()


for (let x = 0; x < (arrayN.length-1); x++) {
    container.appendChild(circulo.cloneNode(true))
}


for (let x = 0; x < (dianas.length); x++) {
    dianas[x].addEventListener('click',(e)=>{
        const eliminado = arrayN.splice((x),1)
        score+=1
        // const eliminado = arrayN.splice((Math.floor( Math.random()*(arrayN.length))),1)
        console.log(arrayN)
        // console.log(eliminado)
        container.removeChild(dianas[x])
        puntos.innerHTML = 'Puntos: ' + String(score)
    })
}


