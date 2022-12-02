const container = document.querySelector('.carrusel-items')
const circulo = document.querySelector('.circulo1')

function obtenerArray() {
    arrayN = JSON.parse(localStorage.getItem('arrayNom'))
    console.log(arrayN)
    console.log(arrayN.length)
}
obtenerArray()


for (let x = 0; x < (arrayN.length-1); x++) {
    container.appendChild(circulo.cloneNode(true))
}

circulo.addEventListener('click',()=>{
    arrayN.splice(1,1)
    console.log(arrayN)
})